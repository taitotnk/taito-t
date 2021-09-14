import Layout from "../components/layout";
import Head from "next/head";
import poststyles from "../styles/post-styles.module.css";
import { siteTitle } from "../components/layout";
import { ContactParams } from "../types/contact";
import { useFormState } from "../lib/formstate";
import { useSendContactForm } from "../lib/sendform";

export default function Contact() {
  const [contact, handleChange] = useFormState<ContactParams>({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, sendContactForm] = useSendContactForm();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendContactForm(contact);
  };

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
