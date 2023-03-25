import { motion, MotionStyle, TargetAndTransition, Variant, VariantLabels } from "framer-motion"

type CardProps = {
    backgroundImage: string,
    title: string
}

const cardStyles: MotionStyle = {
    margin: '0 auto',
    width: '100%',
    height: 400,
    filter: 'brightness(0.8)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'flex-end',
    fontFamily: "Poppins, sans-serif",
    padding: '0 1rem',
    boxSizing: 'border-box',
}

const textStyles: MotionStyle = {
    color: '#fff',
    zIndex: 999,
}

export const Card: React.FC<CardProps> = ({ backgroundImage, title }) => {
    return(
        <motion.div 
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3, stiffness:0  }}
            style={{backgroundImage: `url(${backgroundImage})`, ...cardStyles}}>
            <motion.h2 style={textStyles}>{title}</motion.h2>
        </motion.div>
    )
}