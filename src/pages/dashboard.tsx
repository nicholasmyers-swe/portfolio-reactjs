import React from "react"
import Experience from "./experience";
import Projects from "./projects";
import Banner from "../layouts/banner/banner";
import styles from "./modules/dashboard.module.css";
import About from "./about";

const Dashboard: React.FC = () => {
    return (
        <div className={styles.splitContainer}>
            <div className={styles.leftContainer}>
                <Banner />
            </div>
            <div className={styles.rightContainer}>
                <About />
                <Experience />
                <Projects />
            </div>
        </div>
    )
};

export default Dashboard;