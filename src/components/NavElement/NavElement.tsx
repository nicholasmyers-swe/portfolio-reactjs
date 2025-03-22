import React from "react";
import styles from "./NavElement.module.css"

type NavElementProps = {
    title: string;
};

const NavElement: React.FC<NavElementProps> = ({ title }) => { 
    return (
        <nav className={`${styles.navElement} hover:scale-110 transition-transform duration-100`}>
            {title}
        </nav>
    )
};

export default NavElement;