import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Message from '../layout/Message'
import LinkButton from '../layout/LinkButton'
import ProjectCard from '../project/ProjectCard'

import styles from './Projects.module.css'

function Projects() {
  const [projects, setProjects] = useState([])

  const location = useLocation()
  let message = ''
  if(location.state) {
    message = location.state.message
  }

  useEffect(() => {

    fetch('http://localhost:5000/projects', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProjects(data)
      })
      .catch((err) => console.log(err))

  }, [])

  return (
    <div className={`${styles.container} ${styles.project_container}`}>
      <div className={styles.title_container}>
        <h1>Meus projetos</h1>
        <LinkButton to='../newproject' text='Novo Projeto' />
      </div>
      {message && <Message msg={message} type="sucess" />}
      <div className={styles.start}>
        {projects.length > 0 &&
          projects.map((project) => <ProjectCard 
                                    id={project.id}
                                    name={project.name} 
                                    budget={project.budget}
                                    category={project.category.name}
                                    key={project.id}
          /> )}
      </div>
    </div>
  )
}

export default Projects