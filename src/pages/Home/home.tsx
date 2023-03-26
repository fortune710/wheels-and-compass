import { Box, Container } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';
import { motion, useInView, useScroll } from 'framer-motion';
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Image from '../../assets/wheels-and-compass-intro.png';
import styles from './home.module.scss';

import { KeyboardArrowRight, KeyboardArrowLeft, ExpandMore } from "@mui/icons-material"
import { FloatingMenuButton, Footer, GetInTouchButton, Menu, ScrollAnimationWrapper, ScrollProgress } from '../../components';
import 'swiper/scss';
import 'swiper/scss/autoplay';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';

import Background from '../../assets/landing-background.webp';
import Logo from '../../assets/react.svg';
import Intro from '../../assets/wheels-and-compass-intro.png'
import Laptop from '../../assets/laptop.webp';
import { Pagination, Navigation, Autoplay } from 'swiper';

import { noBorderRadiusButtonStyle } from '../../utils/styles.utils';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../../projects';
import projectStyles from '../../projects/projects.module.scss';

export const HomePage: React.FC = () => {
    const [menuOpen, setMenu] = useState(false);
    const buttonRef = useRef(null);
    const inView = useInView(buttonRef);

    return(
    <main> 
        <header className={inView ? styles.hidden: ""}>
            <nav className={styles.fixedHeader}>
                <img src={Logo} alt="Wheels and Compass Logo"/>

                <GetInTouchButton/>       
            </nav>
        </header>

        <ScrollProgress/>
        <section className={styles.landing}>
            <nav>
                <img src={Logo} alt="Wheels and Compass Logo"/>

                <div>
                    <Link to="/about-us">
                        <p>Who we are</p>
                    </Link>
                    <Link to="/services">
                        <p>What we do</p>
                    </Link>
                </div>    

                <GetInTouchButton textColor='#fff'/>   
            </nav>

            <img 
                className={styles.landingBackground} 
                src={Background}
            />
            <div className={styles.greeting}>
                <div>
                    <TypeAnimation 
                        sequence={['We are Software Developers', 300, 
                        'We are Data Analysts', 300, 'We are Project Managers', 200, 
                        'We are Wheels and Compass', 1000]}
                        cursor
                        speed={30}
                        repeat={1}
                        wrapper="h2"
                        className={styles.typeAnimation}
                    />

                    <p>With our creative expertise, we are ready to turn your dreams into reality.</p>

                    <motion.button
                        className={styles.moreBtn}
                        style={{
                            background:'#326789',
                            color:'#fff', ...noBorderRadiusButtonStyle,
                            borderRadius: '12px'
                        }}
                    >
                        FIND OUT MORE
                    </motion.button>
                </div>

                <div ref={buttonRef} className={styles.expandMore}>
                    <ExpandMore/>
                    <h5>SCROLL DOWN</h5>
                </div>
            </div>

        </section>

        <section className={styles.introSection}>
            <div>
                <h2>
                    Welcome to Wheels and Compass, your trusted IT partner for all your technology needs. 
                    We offer a wide range of services, from IT support and maintenance to software development 
                    and cloud solutions. Our team of experts is committed to delivering high-quality, cost-effective 
                    solutions that meet your unique business requirements.
                </h2>
            </div>

            <img src={Intro}/>
        </section>

        <section className={projectStyles.projectsSection}>
            <h3>Projects</h3>
            <ul className={projectStyles.projectsContainer}>
                {
                    PROJECTS.map((project) => (
                        <ScrollAnimationWrapper className={projectStyles.project} key={project.id}>
                            <img src={project.image} alt={project.name}/>
                            <div className={`${styles.glass} ${projectStyles.name}`}>
                                {project.name}
                            </div>
                        </ScrollAnimationWrapper>
                    ))
                }
            </ul>
        </section>

        <section className={styles.section}>
            <div>
                <h3 className='text-center'>
                    Don't just take our word for it - hear what our clients have to say about working with us. 
                    We pride ourselves on delivering outstanding service and support, and we're always thrilled 
                    to hear from happy customers. 
                </h3>
            </div>


            <Swiper
                autoplay={true}
                loop={true}
                modules={[Autoplay, Pagination, Navigation]}
            >
                <SwiperSlide className={`${styles.testimonial} text-center flex-center`}>
                    <div>
                        <h2>
                            Testimonial 1
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing amet consectetur.
                        </p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className={`${styles.testimonial} text-center flex-center`}>
                    <div>
                        <h2>
                            Testimonial 2
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing amet consectetur.
                        </p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className={`${styles.testimonial} text-center flex-center`}>
                    <div>
                        <h2>
                            Testimonial 3
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing amet consectetur.
                        </p>
                    </div>
                </SwiperSlide>

               
            </Swiper>
        </section>

        <section className={`${styles.section} ${styles.conclusion}`}>
            <h3>
                Ready to take your IT operations to the next level? 
                Contact us today to learn more about our services and how we can help your business grow. 
                We're always available to answer your questions and provide you with the information you need 
                to make the best decisions for your business.
            </h3>
            <div>
                <div className={styles.imageDecorator}/>
                <img src={Laptop}/>
            </div>
        </section>
        
        <Footer/>
        <FloatingMenuButton className={styles.floatingMenu} onClick={() => setMenu(true)}/>
        <Menu dismissMenu={() => setMenu(false)} isOpen={menuOpen}/>
    </main>
    )
}