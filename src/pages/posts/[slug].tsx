import { FC } from 'react';
import Head from 'next/head';
import BlogCard from '@/components/BlogCard';

import ArticleAPI from '@/graphql/article';

import { IData } from '@/types/home.types';
import styles from '@/styles/Slug.module.css';

export async function getStaticProps() {
    const { graphcms, QUERY } = ArticleAPI;
      const { posts } = await graphcms.request(QUERY);
      return {
          props: {
              posts
          },
          revalidate: 10
      }
  }

const Article = () => {

};

export default Article;