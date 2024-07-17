import styles from "./Formulario.module.css"
import CampoTexto from "components/CampoTexto/CampoTexto"

function Formulario() {
    return (
        <section className={styles.formulario}>
        <form className={styles.formularioContainer}>
            <h3 className={styles.subTitulo}>Crear Tarjeta</h3>
            <CampoTexto titulo="Nombre" placeholder="ingrese el título" tipo="text" />
            <CampoTexto titulo="Categoría" placeholder="seleccione una categoría" tipo="text" />
            <CampoTexto titulo="Imagen" placeholder="el enlace es obligatorio" tipo="url" />
            <CampoTexto titulo="Video" placeholder="ingrese el enlace del video" tipo="url" />
            <CampoTexto titulo="Descripción" placeholder="¿De qué se trata éste video?" tipo="textarea" />

        </form>
        </section>
    )
    
}

export default Formulario