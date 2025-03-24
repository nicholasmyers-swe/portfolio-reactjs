import React, { useEffect, useState } from "react"
import Experience from "./experience";
import Projects from "./projects";
import Banner from "../layouts/banner/banner";
import styles from "./modules/dashboard.module.css";
import About from "./about";
import { useLocation } from "react-router-dom";

const Dashboard: React.FC = () => {
    const [currentSection, setCurrentSection] = useState<string>('/');
    const location = useLocation();

    // Update the current section based on the hash in the URL
    useEffect(() => {
        setCurrentSection(location.hash);  // Get the hash (e.g., #about, #projects)
    }, [location]); // Re-run the effect whenever the location changes

    return (
        <div className={styles.splitContainer}>
            <div className={styles.leftContainer}>
                <Banner currentSection={currentSection} />
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