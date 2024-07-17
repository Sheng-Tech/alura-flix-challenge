import styles from "./NuevoVideo.module.css"
import Formulario from "components/Formulario/Formulario"

function NuevoVideo () {
    return (
        <div className={styles.container}>
        <h1 className={styles.titulo}>Nuevo Video</h1>
        <h2 className={styles.texto}>complete el formulario para crear una nueva tarjeta de video</h2>
        <Formulario />
        </div>
    )
}

export default NuevoVideo