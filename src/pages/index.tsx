import { FC } from 'react';
import Head from 'next/head';
import BlogCard from '@/components/BlogCard/BlogCard';

import PostsAPI from '@/graphql/home';

import { IData } from '@/types/home.types';
import styles from '@/styles/Home.module.css';
import Header from '@/components/Header/Header';
import DTD from '@/components/Head/DTD';

export async function getStaticProps() {
  const { graphcms, QUERY } = PostsAPI;
  const { posts } = await graphcms.request(QUERY);
  return {
    props: {
      posts
    },
    revalidate: 10
  }
}

const Home: FC<IData> = ({ posts }) => {
  return (
    <>
      <Head>
        <DTD />
      </Head>

      <Header />

      <main className={styles.main}>
        {posts.map((item) => {
          const { title, author, coverPhoto, slug, datePublished, id } = item;
          return (
            <BlogCard
              key={id}
              title={title}
              author={author}
              slug={slug}
              coverPhoto={coverPhoto}
              datePublished={datePublished}
            />
          )
        })}
      </main>
    </>
  )
}

export default Home;
