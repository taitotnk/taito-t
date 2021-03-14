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
                <div className="mb-6">
                        <label htmlFor="name" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">氏名</label>
                        <input type="text" name="name" id="name" placeholder="例：山田 太郎" onChange={handleChange} required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                </div>
                <div className="mb-6">
                        <label htmlFor="name" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">メールアドレス</label>
                        <input type="email" name="email" id="email" placeholder="メールアドレス" onChange={handleChange} required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                </div>
                <div className="mb-6">
                        <label htmlFor="message" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">お問い合わせ内容</label>
                        <textarea name="message" id="message" placeholder="Your Message" onChange={handleChange} className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" required></textarea>
                </div>
                <div className="mb-6">
                    <button type="submit" className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">送信</button>
                </div>
            </form>
            </div>
        </Layout>
    )
}