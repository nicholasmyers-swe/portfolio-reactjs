import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavElement from "../NavElement/NavElement";
import styles from "./Navbar.module.css";

interface NavbarProps {
    currentSection: string;
}

// Custom hook to detect screen size
const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

    useEffect(() => {
        const checkScreenSize = () => {
            if (window.innerWidth <= 768) {
                setScreenSize('mobile');
            } else if (window.innerWidth <= 1024) {
                setScreenSize('tablet');
            } else {
                setScreenSize('desktop');
            }
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return screenSize;
};

const Navbar: React.FC<NavbarProps> = ({ currentSection }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const screenSize = useScreenSize();
    const navElementTitles: string[] = ['ABOUT', 'EXPERIENCE', 'PROJECTS'];

    // Close navbar when screen size changes or when clicking nav items
    useEffect(() => {
        if (screenSize !== 'mobile') {
            setIsExpanded(false);
        }
    }, [screenSize]);

    const toggleNavbar = () => {
        setIsExpanded(!isExpanded);
    };

    const handleNavClick = () => {
        if (screenSize === 'mobile') {
            setIsExpanded(false);
        }
    };

    // Hamburger menu icon component
    const HamburgerIcon = () => (
        <motion.button
            className={styles.hamburgerButton}
            onClick={toggleNavbar}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle navigation menu"
        >
            <motion.div className={styles.hamburgerLine} 
                animate={isExpanded ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
            />
            <motion.div className={styles.hamburgerLine}
                animate={isExpanded ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
            />
            <motion.div className={styles.hamburgerLine}
                animate={isExpanded ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
            />
        </motion.button>
    );

    // Animation variants for the navbar
    const navbarVariants = {
        collapsed: {
            opacity: 0,
            scale: 0.8,
            y: -20,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        expanded: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: "easeOut",
                staggerChildren: 0.1
            }
        }
    };

    const isMobile = screenSize === 'mobile';

    return (
        <>
            {/* Hamburger menu button - only visible on mobile when collapsed */}
            {isMobile && !isExpanded && (
                <div className={styles.hamburgerContainer}>
                    <HamburgerIcon />
                </div>
            )}

            {/* Main navbar */}
            <AnimatePresence>
                {!isMobile && (
                    <div className={styles.navBarContainer}>
                        {navElementTitles.map((title) => (
                            <div key={title}>
                                <NavElement title={title} currentSection={currentSection} />
                            </div>
                        ))}
                    </div>
                )}
                
                {/* Mobile overlay navbar */}
                {isMobile && isExpanded && (
                    <motion.div 
                        className={styles.mobileNavOverlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div
                            className={styles.mobileNavContent}
                            initial={{ scale: 0.8, y: -20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.8, y: -20 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            {/* Close button for expanded mobile view */}
                            <div className={styles.closeButtonContainer}>
                                <HamburgerIcon />
                            </div>
                            
                            {/* Navigation elements */}
                            {navElementTitles.map((title, index) => (
                                <motion.div
                                    key={title}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.3 }}
                                    onClick={handleNavClick}
                                >
                                    <NavElement title={title} currentSection={currentSection} />
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Backdrop for mobile expanded view */}
            {isMobile && isExpanded && (
                <motion.div
                    className={styles.backdrop}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsExpanded(false)}
                />
            )}
        </>
    );
};

export default Navbar;