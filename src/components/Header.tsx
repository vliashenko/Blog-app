import { FC } from 'react';
import styles from '@/styles/Header.module.css';

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.left}>
                
            </div>
            <div className={styles.left}>
                <h2>
                    BLOG BYTES
                </h2>
            </div>
            <div className={styles.left}>

            </div>
        </header>
    );
};

export default Header;