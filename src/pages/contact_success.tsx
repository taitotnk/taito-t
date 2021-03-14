import Layout from '../components/layout'
import Head from  'next/head'
import poststyles from '../styles/post-styles.module.css'

const ContactSuccessPage: React.FC = () => (
    <Layout>
        <Head>
            <title>お問い合わせありがとうございました</title>
        </Head>
        <div className={poststyles.center}>
        <h2>お問い合わせありがとうございました！</h2>
        </div>
    </Layout>
);
  
export default ContactSuccessPage;