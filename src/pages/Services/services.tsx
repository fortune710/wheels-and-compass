import { FloatingMenuButton, SquareCard, Menu, Navbar, Footer, ScrollAnimationWrapper } from "../../components";
import { ourServices } from "./our-services";
import { useId, useState } from "react";
import { Grid } from "@mui/material";
import styles from './styles.module.scss';
import projectStyles from '../../projects/projects.module.scss';

export const Services: React.FC = () => {
    const [menuOpen, setMenu] = useState(false);

    return(
    <>
    <Navbar/>
    
    <main className="page">

        <section className={styles.greeting}>
            <h1 className="text-center">
                We offer a variety of services to help you streamline your 
                IT operations and improve your overall productivity. 
            </h1>
            <h1>Come find out what we can do for you!</h1>
        </section>

        <section>
            <div className={projectStyles.projectsContainer}>
                {
                    ourServices.map((service) => (
                        <ScrollAnimationWrapper type="fade-in" className={projectStyles.project}>
                            <div className={`glass ${projectStyles.name}`}>
                                {service.title}
                            </div>
                            <img src={service.image} alt={service.title}/>

                            <div className={projectStyles.hiddenContent}>
                                {service.icon.name}
                                <p>{service.description}</p>
                            </div>
                        </ScrollAnimationWrapper>
                    ))
                }
            </div>
        </section>
        <Footer/>

        <FloatingMenuButton className="floating-menu" onClick={() => setMenu(true)}/>
        <Menu dismissMenu={() => setMenu(false)} isOpen={menuOpen}/>
    </main>
    </>
    )
}