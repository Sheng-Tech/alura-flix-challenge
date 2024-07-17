import styles from "./Player.module.css"

function Player({children}) {
    return (
        <div className={styles.playerContainer} style={{ zIndex: 3 }}>
            {children}
        </div>
    )
}

export default Player