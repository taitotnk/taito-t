import { NextPage } from "next";
import Layout from "../components/templates/layout";
import WhiteCard from "../components/atoms/WhiteCard";
import styles from "../styles/works.module.scss";
import Head from "next/head";

const Works: NextPage = () => {
  return (
    <>
      <Head>
        <title>Works | taito-t.com</title>
      </Head>
      <Layout>
        <WhiteCard>
          <h1 className={styles.mente}>メンテナンス中です🙇‍♂️</h1>
        </WhiteCard>
      </Layout>
    </>
  );
};

export default Works;
