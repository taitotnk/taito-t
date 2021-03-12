import Layout from '../components/layout'
import Head from 'next/head'
import styles from '../styles/about.module.css'
import {siteTitle} from '../components/layout'

export default function About(){
    return(
        <Layout>
            <Head>
                <title>About me</title>
                <meta name="og:title" content={siteTitle} />
                <meta property="og:image" content="/images/taitologo.jpg" />
            </Head>
            <div className={styles.wrap}>
            <h1 className={styles.head}>プロフィール</h1>
            <ul>
                <li><h3>氏名：田中 泰斗</h3></li>
                <li><h3>生年月日：2000年12月11日</h3></li>
                <li><h3>所属：INIAD 2年（東洋大学情報連携学部情報連携学科エンジニアリングコース）</h3></li>
            </ul>
            <h1 className={styles.head}>自己紹介</h1>
            <p><b>幼稚園～高校生の12年間サッカーをやっていました。周りでプロサッカー選手になった友人などかなりガチな環境でサッカーに取り組んでいましたが
                どうしてもケガが多いので方向転換し、現在は大学でコンピュータサイエンス
                を学んでいます。特にWebのフロントエンドとサーバーサイドの両方に興味があり、最近ではNext.jsについて学んでコードを書いたり、Golangに入門したりしています。</b></p>
            </div>
        </Layout>
    )
}