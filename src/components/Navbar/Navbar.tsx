import NavElement from "../NavElement/NavElement";
import styles from "./Navbar.module.css";

const Navbar:React.FC = () => {
    const navElementTitles: string[] = ['ABOUT', 'EXPERIENCE', 'PROJECTS'];
    return (
        <div className={styles.navBarContainer}>
            {navElementTitles.map((title) => (
                <NavElement title={title} />
            ))}
        </div>  
    )
};

export default Navbar;