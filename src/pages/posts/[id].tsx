import { getAllPostIds, getPostData } from "../../lib/posts";
import { GetStaticProps, GetStaticPaths } from "next";
import Layout from "../../components/templates/layout";
import Head from "next/head";
import styles from "../../styles/Post.module.scss";
import Image from "next/image";
import PostWhiteCard from "../../components/atoms/PostWhiteCard";

type Props = {
  postData: {
    title: string;
    created_at: string;
    updated_at: string;
    tag: string;
    emoji: string;
    contentHtml: string;
  };
};

const Post: React.FC<Props> = ({ postData }) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title} | taito-t.com</title>
        <meta name="og:title" content={postData.title} />
      </Head>
      <PostWhiteCard>
        <p className={styles.emoji}>{postData.emoji}</p>
        <p className={styles.title}>{postData.title}</p>
        <p className={styles.date}>
          投稿日:{postData.created_at} 更新日:{postData.updated_at}
        </p>
        <article>
          <div
            className={styles.article}
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
        </article>
      </PostWhiteCard>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);
  return {
    props: {
      postData,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export default Post;
