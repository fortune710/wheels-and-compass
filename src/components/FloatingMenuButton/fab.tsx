import { Menu } from "@mui/icons-material"
import { motion, MotionStyle, useScroll } from "framer-motion"
import React from "react"

import styles from './fab.module.scss';

const fabStyles: MotionStyle = {
    background: '#121212',
    color: '#fff',
    borderRadius: '50%',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    bottom: '1rem',
    right: '1rem',
    zIndex: 999
}

type Props = {
    onClick: React.MouseEventHandler,
    className?:string
}

export const FloatingMenuButton: React.FC<Props> = (props) => {
    
    return(
        <motion.button className={props.className} onClick={props.onClick} style={fabStyles}>
            <Menu/>
        </motion.button>
    )
}