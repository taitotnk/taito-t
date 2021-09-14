import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/layout.module.css";

export const siteTitle = "taito-t.com";
export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div>
      <Head>
        <link rel="icon" href="https://taito-t.com/images/taitologo.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:image"
          content="https://taito-t.com/images/taitologo.jpg"
        />
        <meta
          property="twitter:image"
          content="https://taito-t.com/images/taitologo.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@taito_1211" />
      </Head>
      <header className={styles.header}>
        <div className={styles.header_cont}>
          <h3 className={styles.home_link}>
            <Link href="/">
              <a>
                <h2>{siteTitle}</h2>
              </a>
            </Link>
          </h3>
          <h3 className={styles.home_link}>
            <Link href="/blog">
              <a>
                <h2>Blog</h2>
              </a>
            </Link>
          </h3>
          <h3 className={styles.home_link}>
            <Link href="/contact">
              <a>
                <h2>Contact</h2>
              </a>
            </Link>
          </h3>
        </div>
        {home ? (
          <>
            <Image
              src="/images/profile.jpg"
              className={styles.profile_image}
              height={210}
              width={205}
              alt="profile-img"
            />
          </>
        ) : null}
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>
        <div className={styles.policy}>
          <Link href="/policy">
            <a>
              <b>プライバシーポリシー</b>
            </a>
          </Link>
        </div>
        <div className={styles.rights}>
          © 2021 Copyright taito-t.com All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
