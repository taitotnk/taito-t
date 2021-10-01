import { NextPage } from "next";
import Layout from "../components/templates/layout";
import WorksCard from "../components/atoms/WorksCard";
import styles from "../styles/works.module.scss";
import Head from "next/head";
import { worksData } from "../data/worksData";
import Image from "next/image";
import Link from "next/link";

const Works: NextPage = () => {
  return (
    <>
      <Head>
        <title>Works | taito-t.com</title>
      </Head>
      <Layout>
        <div className={styles.container}>
          {worksData.map((data) => (
            <Link href={data.url}>
              <a>
                <WorksCard>
                  <div className={styles.img_wrapper}>
                    <Image
                      src={data.img}
                      alt="app_img"
                      width={400}
                      height={250}
                      layout="responsive"
                    />
                  </div>
                  <p className={styles.appname}>{data.appName}</p>
                  <p className={styles.description}>{data.description}</p>
                </WorksCard>
              </a>
            </Link>
          ))}
        </div>
      </Layout>
    </>
  );
};

export default Works;
