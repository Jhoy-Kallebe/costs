import { useLocation } from 'react-router-dom'

import Message from '../layout/Message'
import styles from './Projects.module.css'

function Projects() {

  const location = useLocation()
  let message = ''
  if(location.state) {
    message = location.state.message
  }

  return (
    <div className={styles.container}>
        <h1>Meus projetos</h1>
        {message && <Message msg={message} type="sucess" />}
    </div>
  )
}

export default Projects