import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Loading from '../layout/Loading'

import styles from './Project.module.css'

function Project() {

    const { id } = useParams()

    const [project, setProject] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)


    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then((resp) => resp.json())
                .then((data) => {
                    setProject(data)
                })
                .catch((err) => console.log(err))
        }, 300)
    }, [id])

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm)
    }

  return (<>
    {project.name ? (
        <div className={`${styles.container} ${styles.project_details}`}>
            <div className={styles.details_container}>
                <h1>Projeto: {project.name}</h1>
                <button className={styles.btn} onClick={toggleProjectForm}>
                    {!showProjectForm ? 'Editar Projeto' : 'Fechar'}
                </button>
                {!showProjectForm ? (
                    <div className={styles.project_info}>
                        <p>
                            <span>Categoria:</span> {project.category.name}
                        </p>
                        <p>
                            <span>Total de Orçamento:</span> R${project.budget}
                        </p>
                        <p>
                            <span>Total Utilizado:</span> R${project.cost}
                        </p>
                    </div>
                ): (
                    <div className={styles.project_info}>
                        <p>Form</p>
                    </div>
                )}
            </div>
        </div>
    ): <Loading />}
  </>)
}

export default Project