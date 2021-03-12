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
            <h1 className={styles.head}>経歴</h1>
            <ul>
                <li>2007年</li>
                <ul>
                    <li><a href="https://saitama-soccer.jp/team/kounanminami/">江南南サッカー少年団に入団</a></li>
                </ul>
            </ul>
            <ul>
                <li>2012年</li>
                <ul>
                    <li><a href="https://www.sakaiku.jp/topics/2012/001915.html">第６回埼玉県第４種新人戦県大会優勝</a></li>
                    <li><a href="https://jr-soccer.jp/2012/08/20/post3903/">第36回関東少年サッカー大会優勝</a></li>
                    <li><a href="https://jr-soccer.jp/2012/09/19/post4207/">バーモントカップ第22回全日本少年フットサル大会埼玉県大会優勝</a></li>
                </ul>
            </ul>
            <ul>
                <li>2013年</li>
                <ul>
                    <li><a href="https://jr-soccer.jp/2013/01/06/post3356/">バーモントカップ第22回全日本少年フットサル大会全国ベスト16</a></li>
                    <li><a href="http://www.fcfukaya.com/">フットボールクラブ深谷に入団</a></li>
                </ul>
            </ul>
            <ul>
                <li>2015年</li>
                <ul>大宮アルディージャユースに3か月間帯同</ul>
            </ul>
            <ul>
                <li>2016年</li>
                <ul>
                    <li>正智深谷高等学校に入学</li>
                    <li><a href="https://shochi.jp/clublog/2016/1121_2496/">全国高校サッカー選手権埼玉県予選優勝</a></li>
                </ul>
            </ul>
            <ul>
                <li>2017年</li>
                <ul>
                    <li><a href="https://saitama-soccer.jp/report/2191/">第95回全国高校サッカー選手権大会全国ベスト8</a></li>
                </ul>
            </ul>
            <h1 className={styles.head}>プログラミングスキル</h1>
            <ul>
                <li>Python</li>
                <li>C</li>
                <li>JavaScript</li>
                <li>HTML/CSS</li>
            </ul>
            </div>
        </Layout>
    )
}