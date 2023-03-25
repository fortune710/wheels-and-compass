import { useScroll, motion } from "framer-motion";
import styles from './scroll.module.scss';

export const ScrollProgress: React.FC = () => {
    const { scrollYProgress } = useScroll();
    return (
        <motion.div className={styles.progressBar} style={{ scaleX: scrollYProgress }} />
    );
}
