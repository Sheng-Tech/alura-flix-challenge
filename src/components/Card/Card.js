import styles from "./Card.module.css";
import borrar from "./deleteCard.png";
import editar from "./editCard.png";
import miniatura from "./miniatura.png"

function Card() {
    return (
        <div className={styles.card}>
            <img src={miniatura} alt="Miniatura video"></img>
            <div className={styles.cardFooter}>
                <div className={styles.cardFooterItem}>
                <img src={borrar} alt="Borrar"></img><span>borrar</span> </div>
                <div className={styles.cardFooterItem}>
                <img src={editar} alt="Editar"></img><span>editar</span></div>
            </div>
        </div>
    )
}

export default Card