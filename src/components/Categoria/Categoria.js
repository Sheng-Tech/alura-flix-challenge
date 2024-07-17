import styles from "./Categoria.module.css"

function Categoria({nombre}) {
    return (
        <div className={styles.categoria}>
            {nombre}

        </div>
    )
    
}

export default Categoria