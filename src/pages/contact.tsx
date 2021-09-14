import Layout from "../components/templates/layout";
import Head from "next/head";
import { siteTitle } from "../components/templates/layout";

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact</title>
        <meta name="og:title" content={siteTitle} />
        <meta property="og:image" content="/images/taitologo.jpg" />
      </Head>
    </Layout>
  );
}
