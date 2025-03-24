import React from "react";
import styles from "./modules/experience.module.css"

interface ExperienceProps {
};

const Experience:React.FC<ExperienceProps> = ({ }) => {
    return (
        <section className="page" id="experience">
            <div className={styles.container}>
            </div>
        </section>
    )
};

export default Experience;