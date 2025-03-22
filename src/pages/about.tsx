import React from "react";
import styles from "./modules/about.module.css"
import { loremIpsum } from "../utils/loremUtils";

interface AboutProps {
};

const About:React.FC<AboutProps> = ({ }) => {

    return (
        <div className="page">
            <div className={styles.container}>
                {loremIpsum(1)}
            </div>
            <div className={`${styles.container} mt-4`}>
                {loremIpsum(2)}
            </div>
        </div>
    )
};

export default About;