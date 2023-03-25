import styles from './footer.module.scss';

export const Footer: React.FC = () => {
    return(
        <footer className={styles.footer}>
            <div className="text-center">
                <ul className='flex-center gap alt-link'>
                    <li>
                        <a href="">ABOUT US</a>
                    </li>
                    <li>
                        <a href="">BLOG</a>
                    </li>
                    <li>
                        <a href="">PROJECTS</a>
                    </li>

                </ul>
            </div>
            <div className='text-center'>
                <p>2023 ©️ Powered by Wheels and Compass</p>
            </div>
        </footer>
    )
}