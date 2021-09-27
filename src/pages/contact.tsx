import Layout from "../components/templates/layout";
import Head from "next/head";
import { siteTitle } from "../components/templates/layout";
import WhiteCard from "../components/atoms/WhiteCard";
import styles from "../styles/contact.module.scss";

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact | taito-t.com</title>
        <meta name="og:title" content={siteTitle} />
        <meta property="og:image" content="/images/taitologo.jpg" />
      </Head>
      <WhiteCard>
        <h1 className={styles.mente}>メンテナンス中です🙇‍♂️</h1>
      </WhiteCard>
    </Layout>
  );
}
