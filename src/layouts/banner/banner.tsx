import Navbar from "../../components/Navbar/Navbar";
import styles from "./banner.module.css"

const Banner:React.FC = () => {
    return (
        <div className={styles.bannerContainer}>
            <div className={styles.bannerHeader}>
                <div className={styles.nameCard}>Nicholas Myers</div>
                <div className={styles.titleCard}>Full-stack Software Engineer</div>
                <div className={styles.summaryCard}>I like to make apps dynamic and efficient.</div>
            </div>
            <Navbar />
        </div>
    )
};

export default Banner;