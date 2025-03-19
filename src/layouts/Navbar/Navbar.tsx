import NavSelector from "../../components/NavSelector/NavSelector";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo} >
                <NavSelector title="Nicholas Myers" />
            </div>
            <div className={styles.pages}>
                <NavSelector title="Experience"/>
                <NavSelector title="Projects" />
                <NavSelector title="Hobbies" />
            </div>
        </div>
    )
};

export default Navbar;