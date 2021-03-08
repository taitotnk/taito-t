import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../styles/layout.module.css'

const siteTitle = 'taito-blog'
export default function Layout({children, home}: {
    children: React.ReactNode
    home?: boolean
}){
    return(
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <header className={styles.header}>
            <div className={styles.header_cont}>
            <h3 className={styles.home_link}>
                <Link href="/" >
                    <a><h2>{siteTitle}</h2></a>
                </Link>
            </h3>
            <h3 className={styles.home_link}>
                <Link href="/" >
                    <a><h2>Home</h2></a>
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
        </div>
    )
}