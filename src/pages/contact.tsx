import Layout from "../components/templates/layout";
import Head from "next/head";
import { siteTitle } from "../components/templates/layout";
import styles from "../styles/contact.module.scss";
import ContactCard from "../components/atoms/ContactCard";
import { contactData } from "../data/contactData";

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact | taito-t.com</title>
        <meta name="og:title" content={siteTitle} />
        <meta property="og:image" content="/images/taitologo.jpg" />
      </Head>
      {contactData.map((data) => (
        <ContactCard
          key={data.id}
          account={data.account}
          id={data.id}
          url={data.url}
        />
      ))}
    </Layout>
  );
}
