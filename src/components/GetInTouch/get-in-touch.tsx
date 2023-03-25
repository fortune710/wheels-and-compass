import { ChevronRight } from "@mui/icons-material"
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styles from './styles.module.scss';

export const GetInTouchButton = () => {
    return (
        <Link
            to="/contact"
            className={styles.button}
        >
            Get In Touch
            <ChevronRight/>
        </Link>
    )
}