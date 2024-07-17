import styles from "./Cards.module.css"
import Categoria from "components/Categoria/Categoria"
import Card from "components/Card/Card"

function Cards() {

    const categorias = [
        "Front End",
        "Back End",
        "Inovación y Gestión"
    ]

    return (
        <div className={styles.container}>
            <Categoria nombre="Front End"></Categoria>
            <div className={styles.cards}>
                <Card />
                <Card />
                <Card />
            </div>
            <Categoria nombre="Back End"></Categoria>
            <div className={styles.cards}>
                <Card />
                <Card />
                <Card />
            </div>
            <Categoria nombre="Innovación y Gestión"></Categoria>
            <div className={styles.cards}>
                <Card />
                <Card />
                <Card />
            </div>

        </div>

    )

}

export default Cards