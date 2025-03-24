import React, { useEffect, useState } from "react";
import styles from "./NavElement.module.css";
import { motion } from "framer-motion";
import { NavHashLink } from "react-router-hash-link";

type NavElementProps = {
    title: string;
    currentSection: string;
};

const NavElement: React.FC<NavElementProps> = ({ title, currentSection }) => {
  // Determine if the current section matches the title
  const isActive = currentSection === `#${title.toLowerCase()}`;

  const scribbleVariants = {
    inactive: { 
      pathLength: .6,
      stroke: 'rgba(0, 0, 0, 0.40)'
    },
    active: { 
      pathLength: 1, 
      stroke: 'rgba(0, 0, 0, 0.75)',
      transition: { duration: 0.3, ease: "easeInOut" }
    },
  };

  const selectorVariants = {
    inactive: { paddingLeft: 0 },
    active: { paddingLeft: 10 }
  }

  const navVariants = {
    inactive: { color: 'rgba(0, 0, 0, 0.40)' },
    active: { color: 'rgba(0, 0, 0, 0.75)' }
  }

  const ScribbleSelect = () => {
    return (
      <motion.svg
        viewBox="0 0 200 100"
        width="40"
        height="20"
      >
        <motion.path
          d="m 0 50 h 200"
          fill="transparent"
          strokeWidth="10"
          variants={scribbleVariants}
          animate={isActive? "active" : "inactive"}
          initial="inactive"
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </motion.svg>
    )
  };

  return (
      <motion.nav className={styles.navElement} variants={navVariants} animate={isActive ? "active" : "inactive"}>
        <ScribbleSelect />
        <motion.div variants={selectorVariants} className="tracking-wider font-semibold">
          <NavHashLink 
            to={`/#${title.toLowerCase()}`}
            scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
            className={styles.noLinkStyle}
            
          >
            <span className="text-red">{title}</span>
          </NavHashLink>
        </motion.div>
      </motion.nav>
  )
};

export default NavElement;