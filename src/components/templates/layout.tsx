import Head from "next/head";
import Link from "next/link";
import React from "react";
import styles from "../../styles/layout.module.scss";
import Header from "../organisms/Header";

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
      <Header></Header>
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
