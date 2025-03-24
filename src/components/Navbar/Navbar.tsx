import NavElement from "../NavElement/NavElement";
import styles from "./Navbar.module.css";

interface NavbarProps {
    currentSection: string;
}

const Navbar:React.FC<NavbarProps> = ({ currentSection }) => {
    const navElementTitles: string[] = ['ABOUT', 'EXPERIENCE', 'PROJECTS'];
    return (
        <div className={styles.navBarContainer}>
            {navElementTitles.map((title) => (
                <NavElement key={title} title={title} currentSection={currentSection} />
            ))}
        </div>  
    )
};

export default Navbar;