import React from "react";
import { getAppColors } from "../../utils/colorUtils";
import styles from "./NavSelector.module.css"

type NavSelectorProps = {
    title: string;
};

const NavSelector: React.FC<NavSelectorProps> = ({ title }) => { 
    let colorStyle = {} as React.CSSProperties;
    switch (title) {
        case 'Experience':
            colorStyle = {
                'backgroundColor': getAppColors('dark-green')
            } as React.CSSProperties;
            break;
        case 'Projects':
            colorStyle = {
                'backgroundColor': getAppColors("dark-vanilla")
            } as React.CSSProperties;
            break;
        case 'Hobbies':
            colorStyle = {
                'backgroundColor': getAppColors("dutch-white")
            } as React.CSSProperties;
            break
    }
    return (
        <div className={styles.navSelector} style={colorStyle}>
            {title}
        </div>
    )
};

export default NavSelector;