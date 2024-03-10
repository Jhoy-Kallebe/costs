import stylesPages from './pages.module.css'
import styles from './NewProject.module.css'

function NewProject() {
    return (
        <div className={stylesPages.container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
        </div>
    )
}

export default NewProject