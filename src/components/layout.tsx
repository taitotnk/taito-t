import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../styles/layout.module.css'

export const siteTitle = 'taito-t.com'
export default function Layout({children, home}: {
    children: React.ReactNode
    home?: boolean
}){
    return(
        <div>
            <Head>
            <link rel="icon" href="/images/taitologo.jpg" />
            <meta name="description" content="Taitoの技術メモ＆ポートフォリオサイトです" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@taito_1211" />
            </Head>
            <header className={styles.header}>
            <div className={styles.header_cont}>
            <h3 className={styles.home_link}>
                <Link href="/" >
                    <a><h2>{siteTitle}</h2></a>
                </Link>
            </h3>
            <h3 className={styles.home_link}>
                <Link href="/about" >
                    <a><h2>About me</h2></a>
                </Link>
            </h3>
            <h3 className={styles.home_link}>
                <Link href="/contact" >
                    <a><h2>Contact</h2></a>
                </Link>
            </h3>
            </div>
                {home ?(
                <>
                <Image  src="/images/profile.jpg" className={styles.profile_image} height={200} width={200}/>
                </>
                ) : (
                <>
                </>
                )
                }
            </header>
            <main>{children}</main>
            <footer>
            <div className={styles.policy}>
                <Link href="/policy" >
                    <a><b>プライバシーポリシー</b></a>
                </Link>
            </div>
            <div className={styles.rights}>
                © 2021 Copyright taito-t.com All Rights Reserved.
            </div>
            </footer>
        </div>
    )
}