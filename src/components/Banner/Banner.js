import styles from "./Banner.module.css"
import BannerCard from "components/BannerCard/BannerCard"
import Player from "components/Player/Player"
import Categoria from "components/Categoria/Categoria"

function Banner({ img, color }) {
    return (
        <div className={styles.capa} style={{ backgroundImage: `url("/img/banner-${img}.png")` }}>
            <div className={styles.gradient} style={{ background: `${color}`, zIndex:1, }}>
                <BannerCard >
                    <Categoria nombre="Front End" />

                    <h2>Challenge React</h2>
                    <span>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</span>
                </BannerCard>
                <Player>
                    <iframe className={styles.player} width="560" height="315" src="https://www.youtube.com/embed/MnBNPA45NW8?si=sjKkXmr8eShvoTmZ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                </Player>
            </div>


        </div>
    )

}

export default Banner