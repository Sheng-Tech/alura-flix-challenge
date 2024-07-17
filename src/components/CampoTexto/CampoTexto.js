import styles from "./CampoTexto.module.css"

function CampoTexto({ titulo, placeholder, tipo }) {
    return (
        <div className={styles.campoTexto}>
            <label>{titulo}</label>
            <input className={styles.inputTitulo} type={tipo} placeholder={placeholder} required></input>
        </div>
    )
}

export default CampoTexto