import { ChevronRight } from "@mui/icons-material"
import { Link } from "react-router-dom";
import styles from './styles.module.scss';

interface Props {
    textColor?: string;
}
export const GetInTouchButton: React.FC<Props> = ({ textColor }) => {
    return (
        <Link
            style={{ color: textColor }}
            to="/contact"
            className={styles.button}
        >
            Get In Touch
            <ChevronRight/>
        </Link>
    )
}