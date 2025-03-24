import React from "react";
import styles from "./modules/about.module.css"
import { loremIpsum } from "../utils/loremUtils";

interface AboutProps {
};

const About:React.FC<AboutProps> = ({ }) => {

    return (
        <section className="page" id="about">
            <div className={styles.container}>
                {loremIpsum(1)}
            </div>
            <div className={`${styles.container} mt-4`}>
                {loremIpsum(2)}
            </div>
        </section>
    )
};

export default About;