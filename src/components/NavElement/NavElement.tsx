import React, { useEffect, useState, useMemo } from "react";
import styles from "./NavElement.module.css";
import { motion } from "framer-motion";
import { NavHashLink } from "react-router-hash-link";

type NavElementProps = {
    title: string;
    currentSection: string;
};

type AnimationState = 'inactive' | 'selecting' | 'active' | 'deselecting';

// Animation constants
const ANIMATION_TIMINGS = {
  SELECTION_DELAY: 100,
  DESELECTION_DELAY: 600,
} as const;

const EASING_CURVES = {
  SMOOTH: [0.23, 1, 0.32, 1] as const,
  DECELERATE: [0.68, -0.6, 0.32, 1.6] as const,
} as const;

const NavElement: React.FC<NavElementProps> = ({ title, currentSection }) => {
  const isActive = currentSection === `#${title.toLowerCase()}`;
  const [wasActive, setWasActive] = useState(false);
  const [animationState, setAnimationState] = useState<AnimationState>('inactive');

  useEffect(() => {
    if (isActive && !wasActive) {
      setAnimationState('selecting');
      const timer = setTimeout(() => setAnimationState('active'), ANIMATION_TIMINGS.SELECTION_DELAY);
      return () => clearTimeout(timer);
    } else if (!isActive && wasActive) {
      setAnimationState('deselecting');
      const timer = setTimeout(() => setAnimationState('inactive'), ANIMATION_TIMINGS.DESELECTION_DELAY);
      return () => clearTimeout(timer);
    } else if (!isActive) {
      setAnimationState('inactive');
    }
    
    setWasActive(isActive);
  }, [isActive, wasActive]);

  const scribbleVariants = useMemo(() => ({
    inactive: { 
      pathLength: 0.6,
      stroke: 'var(--dark-text-secondary)',
      transition: { duration: 0.2, ease: "easeOut" }
    },
    selecting: { 
      pathLength: 0.6,
      stroke: 'var(--dark-text-secondary)',
      transition: { duration: 0.1, ease: "easeIn" }
    },
    active: { 
      pathLength: 0.9, 
      stroke: 'var(--dark-accent-blue)',
      transition: { duration: 0.6, ease: EASING_CURVES.SMOOTH }
    },
    deselecting: { 
      pathLength: 0.6,
      stroke: 'var(--dark-text-secondary)',
      transition: { 
        pathLength: { duration: 0.6, ease: EASING_CURVES.DECELERATE },
        stroke: { duration: 0.4, ease: "easeInOut", delay: 0.1 }
      }
    },
  }), []);

  const textVariants = useMemo(() => ({
    inactive: { 
      paddingLeft: 0,
      color: 'var(--dark-text-secondary)',
      transition: { duration: 0.25, ease: "easeOut" }
    },
    selecting: { 
      paddingLeft: 0,
      color: 'var(--dark-text-secondary)',
      transition: { duration: 0.1, ease: "easeIn" }
    },
    active: { 
      paddingLeft: 10,
      color: 'var(--dark-accent-blue)',
      transition: { duration: 0.5, ease: "easeOut", delay: 0.15 }
    },
    deselecting: { 
      paddingLeft: 0,
      color: 'var(--dark-text-secondary)',
      transition: { duration: 0.4, ease: "easeInOut" }
    }
  }), []);

  return (
    <motion.nav className={styles.navElement}>
      <NavHashLink 
        to={`/#${title.toLowerCase()}`}
        scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
        className={styles.noLinkStyle}
      >
        <div className={styles.navContent}>
          <motion.svg
            viewBox="0 0 200 100"
            width="40"
            height="20"
            className={styles.scribbleLine}
          >
            <motion.path
              d="m 0 50 h 200"
              fill="transparent"
              strokeWidth="10"
              variants={scribbleVariants}
              animate={animationState}
              initial="inactive"
            />
          </motion.svg>
          <motion.div 
            variants={textVariants} 
            animate={animationState} 
            className={styles.navText}
          >
            {title}
          </motion.div>
        </div>
      </NavHashLink>
    </motion.nav>
  );
};

export default NavElement;