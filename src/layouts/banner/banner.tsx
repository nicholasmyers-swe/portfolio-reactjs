import Navbar from "../../components/Navbar/Navbar";
import styles from "./banner.module.css"

interface BannerProps {
    currentSection: string;
}

const Banner:React.FC<BannerProps> = ({ currentSection }) => {
    return (
        <div className={styles.bannerContainer}>
            <div className={styles.bannerHeader}>
                <div className={styles.nameCard}>Nicholas Myers</div>
                <div className={styles.titleCard}>Full-stack Software Engineer</div>
                <div className={styles.summaryCard}>jazz</div>
            </div>
            <Navbar currentSection={currentSection} />
        </div>
    )
};

export default Banner;