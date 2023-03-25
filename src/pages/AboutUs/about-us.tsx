import { ScrollProgress, Card, FloatingMenuButton, Menu, Navbar } from "../../components"
import Trust from '../../assets/trust.webp';
import Quality from '../../assets/quality.webp';
import Creativity from '../../assets/creativity.webp';
import Mission from '../../assets/mission.webp';
import Vision from '../../assets/vision.webp';
import Target from '../../assets/target.png';

import Salisu from '../../assets/mr-salisu.jfif';
import Fahad from '../../assets/mr-fahad.jfif'

import { Grid } from "@mui/material";
import { useState } from "react";

import { motion } from "framer-motion";
import styles from './about-us.module.scss';
export const AboutUs: React.FC = () => {
    const [menuOpen, setMenu] = useState(false);

    return(
    <>
    <Navbar/>
    <main className="page">
        <ScrollProgress/>
        <section className={styles.greeting}>
            <h1>
                At Wheels and Compass, we have a deep passion for technology 
                and a commitment to delivering outstanding results for our clients. 
            </h1>
        </section>

        {
            /**
             

            <div className={styles.intro}>
                <p>
                    With our creativity, we set the bar high and 
                    deliver the best quality products and services.
                </p>
                <img width="60px" height="60px" src={Target} alt="Arrow Target"/>
            </div>

             */
        }

        <section>
            <h3 className="text-center">
                With us, you get
            </h3>
            <Grid container gap={1}>
                <Grid item xs={12} sm={6} md={3.9}>
                    <Card backgroundImage={Trust} title="Trust"/>
                </Grid>
                <Grid item xs={12} sm={6} md={3.9}>
                    <Card backgroundImage={Quality} title="Quality"/>
                </Grid>
                <Grid item xs={12} sm={6} md={3.9}>
                    <Card backgroundImage={Creativity} title="Creativity"/>
                </Grid>
            </Grid>
        </section>
        

        <section className={styles.section}>
            <div className={styles.mission}>
                <div>
                    <h2>Our Mission</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t
                        empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                </div>

                <img width="100%" src={Mission}/>
            </div>

            <div className={styles.vision}>
                <img width="100%" src={Vision}/>
                <div>
                    <h2>Our Vision</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>

            </div>

        </section>

        <section className={styles.section}>
            <div className={styles.ourTeam}>
                <div>
                    <h2>
                        Meet our team of creators and problem solvers
                    </h2>
                    <p>
                        To be the company our customers want us to be, it takes an
                        ecletic group of passionate creators. Get to know the faces behind 
                        Wheels and Compass
                    </p>
                </div>
            </div>
            <Grid gap={1} container>
                <Grid item xs={12} sm={6} md={4}>
                    <div className={styles.teamMember}>
                        <img src={Salisu} alt="Salisu-Yusuf"/>
                        <p>Salisu Yusuf</p>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <div className={styles.teamMember}>
                        <img src={Fahad} alt="Fahad-Umar"/>
                        <p>Fahad Umar</p>
                    </div>
                </Grid>

            </Grid>

        </section>

        <FloatingMenuButton className="floating-menu" onClick={() => setMenu(true)}/>
        <Menu dismissMenu={() => setMenu(false)} isOpen={menuOpen}/>

    </main>
    </>
    )
}