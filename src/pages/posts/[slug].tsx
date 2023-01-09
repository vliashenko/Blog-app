import { FC } from 'react';
import ArticleAPI from '@/graphql/article';

import DOMPurify from 'isomorphic-dompurify';
import moment from 'moment';

import { IPost } from '@/types/home.types';
import { IBlogPost } from '@/types/blogpost.types';
import styles from '@/styles/Slug.module.css';

export async function getStaticPaths() {
    const { SLUGLIST, graphcms } = ArticleAPI;
    const { posts } = await graphcms.request(SLUGLIST);
    return {
        paths: posts.map((post: IPost) => ({ params: { slug: post.slug } })),
        fallback: false,
    };
};

export async function getStaticProps({ params }: any) {
    const { graphcms, QUERY } = ArticleAPI;
    const slug = params.slug;
    const data = await graphcms.request(QUERY, { slug });
    const post = data.post;
    return {
        props: {
            post,
        },
        revalidate: 30,
    };
}

const BlogPost: FC<IBlogPost> = ({ post }) => {
    let clean = DOMPurify.sanitize(post.content.html);
    return (
        <main className={styles.blog}>
            <picture>
                <img
                    className={styles.cover}
                    src={post.coverPhoto.url}
                    alt={post.title}
                />
            </picture>
            <div className={styles.title}>
                <div className={styles.authdetails}>
                    <picture>
                        <img src={post.author.avatar.url} alt={post.author.name} />
                    </picture>

                    <div className={styles.authtext}>
                        <h6>By {post.author.name} </h6>
                        <h6 className={styles.date}>
                            {moment(post.datePublished).format("MMMM d, YYYY")}
                        </h6>
                    </div>
                </div>
            </div>

            <div
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: clean }}  
            ></div>
        </main>
    );
};

export default BlogPost;