import styles from "./Rodapie.module.css"
import logo from "./logo-main.png"

function Rodapie() {
    return (
        <footer className={styles.rodapie}>
            <h2><img src={logo} alt="Logo Aluraflix" className={styles.logo} /></h2>
            <div><span>Desarrollado por Jesús Gómez</span></div>
            
        </footer>
    )
}

export default Rodapie