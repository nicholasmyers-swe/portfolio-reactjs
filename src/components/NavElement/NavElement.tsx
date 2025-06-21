import React, { useEffect, useState, useMemo } from "react";
import styles from "./NavElement.module.css";
import { motion } from "framer-motion";
import { NavHashLink } from "react-router-hash-link";

type NavElementProps = {
    title: string;
    currentSection: string;
};

type AnimationState = 'inactive' | 'selecting' | 'active' | 'deselecting';

const ANIMATION_TIMINGS = {
  SELECTION_DELAY: 60, // Reduced from 100ms
  DESELECTION_DELAY: 350, // Reduced from 600ms
} as const;

const EASING_CURVES = {
  SMOOTH: [0.23, 1, 0.32, 1] as const,
  DECELERATE: [0.68, -0.6, 0.32, 1.6] as const,
} as const;

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

const NavElement: React.FC<NavElementProps> = ({ title, currentSection }) => {
  const isActive = currentSection === `#${title.toLowerCase()}`;
  const [wasActive, setWasActive] = useState(false);
  const [animationState, setAnimationState] = useState<AnimationState>('inactive');
  const screenSize = useScreenSize();

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
      transition: { duration: 0.15, ease: "easeOut" } // Reduced from 0.2
    },
    selecting: { 
      pathLength: 0.6,
      stroke: 'var(--dark-text-secondary)',
      transition: { duration: 0.08, ease: "easeIn" } // Reduced from 0.1
    },
    active: { 
      pathLength: 0.9, 
      stroke: 'var(--dark-accent-blue)',
      transition: { duration: 0.4, ease: EASING_CURVES.SMOOTH } // Reduced from 0.6
    },
    deselecting: { 
      pathLength: 0.6,
      stroke: 'var(--dark-text-secondary)',
      transition: { 
        pathLength: { duration: 0.35, ease: EASING_CURVES.DECELERATE }, // Reduced from 0.6
        stroke: { duration: 0.25, ease: "easeInOut", delay: 0.05 } // Reduced from 0.4 and 0.1
      }
    },
  }), []);

  // Desktop variants with movement animations - Made faster
  const desktopTextVariants = useMemo(() => ({
    inactive: { 
      paddingLeft: 0,
      color: 'var(--dark-text-secondary)',
      transition: { duration: 0.18, ease: "easeOut" } // Reduced from 0.25
    },
    selecting: { 
      paddingLeft: 0,
      color: 'var(--dark-text-secondary)',
      transition: { duration: 0.08, ease: "easeIn" } // Reduced from 0.1
    },
    active: { 
      paddingLeft: 10,
      color: 'var(--dark-accent-blue)',
      transition: { duration: 0.35, ease: "easeOut", delay: 0.1 } // Reduced from 0.5 and 0.15
    },
    deselecting: { 
      paddingLeft: 0,
      color: 'var(--dark-text-secondary)',
      transition: { duration: 0.25, ease: "easeInOut" } // Reduced from 0.4
    }
  }), []);

  // Tablet/Mobile variants with only color animations - Much faster
  const responsiveTextVariants = useMemo(() => ({
    inactive: { 
      paddingLeft: 0, // No movement
      color: 'var(--dark-text-secondary)',
      transition: { 
        paddingLeft: { duration: 0 }, // Instant, no animation
        color: { duration: 0.12, ease: "easeOut" } // Much faster - reduced from 0.25
      }
    },
    selecting: { 
      paddingLeft: 0, // No movement
      color: 'var(--dark-text-secondary)',
      transition: { 
        paddingLeft: { duration: 0 }, // Instant, no animation
        color: { duration: 0.06, ease: "easeIn" } // Much faster - reduced from 0.1
      }
    },
    active: { 
      paddingLeft: 0, // No movement
      color: 'var(--dark-accent-blue)',
      transition: { 
        paddingLeft: { duration: 0 }, // Instant, no animation
        color: { duration: 0.2, ease: "easeOut", delay: 0.05 } // Much faster - reduced from 0.5 and 0.15
      }
    },
    deselecting: { 
      paddingLeft: 0, // No movement
      color: 'var(--dark-text-secondary)',
      transition: { 
        paddingLeft: { duration: 0 }, // Instant, no animation
        color: { duration: 0.15, ease: "easeInOut" } // Much faster - reduced from 0.4
      }
    }
  }), []);

  // Choose variants based on screen size
  const textVariants = screenSize === 'mobile' ? responsiveTextVariants : desktopTextVariants;

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