import { motion, MotionStyle } from "framer-motion"
import { Close, People, Home, GroupWork } from "@mui/icons-material"
import { Link } from "react-router-dom"

const listStyles: MotionStyle = {
    listStyleType: 'none',
    padding: '10px 12px',
    margin: 0
}

const listItemStyles: MotionStyle = {
    height: 50,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10,
}

type MenuProps = {
    isOpen: boolean,
    dismissMenu?: React.MouseEventHandler
}

export const Menu: React.FC<MenuProps> = ({ isOpen, dismissMenu}) => {
    const menuStyles: MotionStyle = {
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: '0',
        height: '40%',
        borderRadius: '15px 15px 0 0',
        boxShadow: '2px 1px 5px 1px #333333',
        width: '100%',
        display: isOpen ? 'block' : 'none',
        background: '#fff',
        zIndex: 999,
        fontFamily: "Poppins, sans-serif",
    }

    
    return(
    <motion.div style={menuStyles}>
        <motion.ul style={listStyles}>
            <ListItem href="/home">
                <Home />
                Home
            </ListItem>
            <ListItem href="/about-us">
                <People />
                Who we are
            </ListItem>
            <ListItem href="/services">
                <GroupWork />
                What we do
            </ListItem>
            <motion.li style={listItemStyles} onClick={dismissMenu}>
                <Close/>
                Close Menu
            </motion.li>
        </motion.ul>
    </motion.div>
    )
}

type ListItemProps = {
    children: any,
    href: string,
}
const ListItem: React.FC<ListItemProps> = (props) => (
    <motion.li style={listItemStyles}>
        <Link className="menu-item" to={props?.href}>
            {props.children}
        </Link>
    </motion.li>
)

