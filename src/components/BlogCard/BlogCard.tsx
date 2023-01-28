import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import moment from 'moment';

import { IBlogCard } from '@/types/blogcard.types';
import styles from './BlogCard.module.css'

const BlogCard: FC<IBlogCard> = ({ author, coverPhoto, datePublished, slug, title }) => {
    return (
        <div className={styles.card}>
            <Link href={`/posts/${slug}`}>
                <picture className={styles.imgContainer}>
                    <img src={coverPhoto.url} alt={author.name} />
                </picture>
            </Link>
            <div className={styles.text}>
                <h2>{title}</h2>
                <div className={styles.details}>
                    <picture className={styles.author}>
                            <Image 
                                height={36} 
                                width={36} 
                                src={author.avatar.url} 
                                alt={author.name} 
                            />
                        <h3>{author.name}</h3>
                    </picture>
                    <div className={styles.date}>
                        <h3>{moment(datePublished).format('MMM Do YY')}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
