import Head from "next/head";
import Link from "next/link";
import React from "react";
import styles from "../../styles/layout.module.scss";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

export const siteTitle = "taito-t.com";
export default function Layout({ children }: { children: React.ReactNode }) {
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
      <Footer></Footer>
    </div>
  );
}
