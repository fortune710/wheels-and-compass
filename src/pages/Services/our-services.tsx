import { Insights, Computer, Hardware } from "@mui/icons-material"

import HardwareImage from '../../assets/hardware.webp';
import ITImage from '../../assets/IT.webp';
import DataAnalysis from '../../assets/data-analysis.webp';

export const ourServices = [
    {
        image: HardwareImage,
        icon: {
            name: <Hardware />,
            background: '#009b72' 
        },
        title: "Hardware Design and Fabrication",
        description: "Quality hardware devices to meet your need"
    },
    {
        image: ITImage,
        icon: {
            name: <Computer />,
            background: '#f26430'
        },
        title: "IT Services & Consultancy",
        description: "From software development to project managment, we've got it covered"
    },
    {
        image: DataAnalysis,
        icon: {
            name: <Insights />,
            background: '#6761a8'
        },
        title: "Data Oriented Services",
        description: "Data is the new oil, we'd like to help you utilize it"
    }
] as const