import { Link } from "react-router-dom";
import styles from "./Cabecera.module.css";
import logo from "./logo.png";
import CabeceraLink from "../CabeceraLink/CabeceraLink";

function Cabecera() {
    return (
        <header className={styles.cabecera}>
            <Link to="/">
                <section className={styles.logoContainer}>
                    <img src={logo} alt="Logo Aluraflix" className={styles.logo} /> <span>Cinema</span>
                </section>
            </Link>
            <nav className={styles.nav}>
                <CabeceraLink url="./">
                <button className={styles.homeActive}>Home</button>
                    
                </CabeceraLink>
                <CabeceraLink url="./NuevoVideo">
                <button className={styles.newVideoInactive}>Nuevo Video</button>
                    
                </CabeceraLink>
            </nav>
        </header>
    )
}

export default Cabecera