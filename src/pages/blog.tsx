import Head from "next/head";
import { getSortedPostsData } from "../lib/posts";
import { GetStaticProps } from "next";
import Link from "next/link";
import Layout from "../components/templates/layout";
import Image from "next/image";
import { siteTitle } from "../components/templates/layout";
import { NextPage } from "next";
import styles from "../styles/blog.module.scss";
import WideWhiteCard from "../components/atoms/WideWhiteCard";

type Props = {
  allPostsData: {
    id: string;
    title: string;
    created_at: string;
    updated_at: string;
    emoji: string;
    tag: string;
  }[];
};

const Blog: NextPage<Props> = ({ allPostsData }) => {
  return (
    <Layout>
      <Head>
        <title>Blog | taito-t.com</title>
        <meta property="og:title" content={siteTitle} />
        <meta
          property="og:description"
          content="Taitoの技術メモ＆ポートフォリオサイトです"
        />
        <meta
          name="description"
          content="Taitoの技術メモ＆ポートフォリオサイトです"
        />
      </Head>
      {allPostsData.map(({ id, title, created_at, emoji, tag }) => (
        <WideWhiteCard>
          <Link href={`/posts/${id}`} key={id}>
            <a>
              <div className={styles.top_flex}>
                <p className={styles.emoji}>{emoji}</p>
                <p className={styles.title}>{title}</p>
              </div>
              <div className={styles.under_flex}>
                <p className={styles.tag}>#{tag}</p>
                <p className={styles.date}>⏳{created_at}</p>
              </div>
            </a>
          </Link>
        </WideWhiteCard>
      ))}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default Blog;
