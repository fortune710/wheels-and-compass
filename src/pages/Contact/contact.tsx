import { Input } from "@mui/material"
import { Navbar } from "../../components"
import { ChatBubbleOutline } from "@mui/icons-material"

import styles from './styles.module.scss';

export const ContactPage = () => {
    return(
        <>
            <Navbar/>        
            <main className={`page ${styles.page}`}>
                <section>
                    <div className={styles.point}>
                        <span className={styles.iconHolder}>
                            <ChatBubbleOutline/>
                        </span>
                        <div>
                            <h2>Chat with us</h2>
                            <p>Our friendly team is here to help</p>
                            <h5>wac@gmail.com</h5>
                        </div>
                    </div>

                    <div className={styles.point}>
                        <span className={styles.iconHolder}>
                            <ChatBubbleOutline/>
                        </span>
                        <div>
                            <h2>Call us</h2>
                            <p>Mon-Fri from 8am to 5pm</p>
                            <h5>+2348026616431</h5>
                        </div>
                    </div>

                    <div className={styles.point}>
                        <span className={styles.iconHolder}>
                            <ChatBubbleOutline/>
                        </span>
                        <div>
                            <h2>Visit us</h2>
                            <p>Come say hello at out office</p>
                            <h5>wac@gmail.com</h5>
                        </div>
                    </div>
                </section>
                <div>
                    <h1>
                        Got ideas? We've got the skills. Let's team up
                    </h1>
                    <p>Tell us more about yourself and what you have in mind</p>
                
                    <Input
                        placeholder="Enter your name"
                        fullWidth={true}
                    />

                    <Input
                        placeholder="Enter your email"
                        fullWidth={true}
                    />
                    <Input
                        multiline={true}
                        sx={{ minHeight: '100px' }}
                        placeholder="Tell us about the project"
                        fullWidth={true}
                    />

                    <button>
                        Send Message!
                    </button>
                </div>
            </main>
        </>
    )
}