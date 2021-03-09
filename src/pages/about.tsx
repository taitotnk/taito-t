import Layout from '../components/layout'
import Head from 'next/head'
import poststyles from '../styles/post-styles.module.css'
import {siteTitle} from '../components/layout'

export default function About(){
    return(
        <Layout>
            <Head>
                <title>About me</title>
                <meta name="og:title" content={siteTitle} />
                <meta property="og:image" content="/images/taitologo.jpg" />
            </Head>
            <div className={poststyles.center}>
            <h1>Coming soon...</h1>
            </div>
        </Layout>
    )
}