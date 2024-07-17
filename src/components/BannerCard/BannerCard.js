import styles from "./BannerCard.module.css"

function BannerCard({children}) {
    return (
        <div className={styles.container} style={{ zIndex:2 }} >
            
            {children}
            
        </div>
    )
}

export default BannerCard