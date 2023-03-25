import { motion, MotionStyle } from "framer-motion"

type SquareCardProps = {
    icon?: {
        name: any,
        background: string
    }
    title: string,
    description: string
}

const squareCardStyles: MotionStyle = {
    borderRadius: 10,
    width: '100%',
    aspectRatio: 1,
    display: 'flex',
    flexDirection: 'column',
    border: '0.2px solid #e3e3e3'
}

const iconStyles: MotionStyle = {
    padding: '0.5rem', 
    borderRadius: '5px',
    width: 50,
    height: 50,
    color: "white",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

export const SquareCard: React.FC<SquareCardProps> = ({ icon, title, description }) => {
    return(
        <motion.div 
            whileHover={{ boxShadow: '2px 1px 5px -1px #f0f0f0' }}
            style={squareCardStyles}>
            <motion.span
                style={{ background: icon?.background, ...iconStyles }}
            >
                {icon?.name}
            </motion.span>
            <h2>{title}</h2>
            <p>{description}</p>
            
        </motion.div>
    )
}