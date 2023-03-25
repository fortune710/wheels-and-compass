import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import { ChevronRight, Menu } from "@mui/icons-material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "./navbar.module.scss";

import Logo from '../../assets/react.svg'
import { GetInTouchButton } from "..";

const navStyles = { 
    width:'100%', 
    display:'flex', 
    justifyContent:'space-between',
}

export const Navbar:React.FC = () => {
  
    return(
        <nav className={styles.navbar}>
            <img src={Logo} alt="Wheels and Compass Logo"/>

            <GetInTouchButton/>
        </nav>
    )
}