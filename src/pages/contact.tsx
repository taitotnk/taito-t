import Layout from '../components/layout'
import Head from 'next/head'
import poststyles from '../styles/post-styles.module.css'
import {siteTitle} from '../components/layout'
import {ContactParams} from '../types/contact'
import { useFormState } from '../lib/formstate'
import { useSendContactForm } from '../lib/sendform'

export default function Contact(){

    const [contact, handleChange] = useFormState<ContactParams>({
        name: '',
        email: '',
        message: '',
      });
      const [errorMessage, sendContactForm] = useSendContactForm();
      const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        sendContactForm(contact);
      };

    return(
        <Layout>
            <Head>
                <title>Contact</title>
                <meta name="og:title" content={siteTitle} />
                <meta property="og:image" content="/images/taitologo.jpg" />
            </Head>
            <div className={poststyles.center}>
            <h2>お問い合わせ</h2>
            {errorMessage && <p>{errorMessage}</p>}
            <form method='post' onSubmit={handleSubmit}>
                <div className='field'>
                <label>お名前</label>
                <div>
                    <input type='text' placeholder='お名前' name='name' onChange={handleChange} required />
                </div>
                </div>
                <div>
                <label>メールアドレス</label>
                <div>
                    <input type='email' placeholder='メールアドレス' name='email' onChange={handleChange} required />
                </div>
                </div>
                <div>
                <label>お問い合わせ内容</label>
                <div>
                    <textarea placeholder='Your Message' name='message' onChange={handleChange} required />
                </div>
                </div>
                <button type='submit'>お問い合わせをする</button>
            </form>
            </div>
        </Layout>
    )
}