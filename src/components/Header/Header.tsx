import { FC } from 'react';
import Link from 'next/link';

import { SocialIcons } from './icon-model';

import { BsSearch } from 'react-icons/bs';

import { icons } from './types';
import styles from './Header.module.css';

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.left}>
                {SocialIcons.map((item, i) => {
                    const { path, icon } = item;
                    const Icon = icons[icon as keyof typeof icons];
                    return (
                        <Link className={styles.link} href={path} key={i}>
                            <Icon />
                        </Link>
                    )
                })}
            </div>
            <div className={styles.center}>
                <h2 className={styles.title}>
                    WEB BLOG
                </h2>
            </div>
            <div className={styles.right}>
                <div className={styles.searchBox}>
                    <button className={styles.btnSearch}>
                        <BsSearch/>
                    </button>
                    <input type="text" className={styles.inputSearch} placeholder="Type to Search..."/>
                </div>
            </div>
        </header>
    );
};

export default Header;