import { NextPage } from "next";
import Layout from "../components/templates/layout";
import WorksCard from "../components/atoms/WorksCard";
import styles from "../styles/works.module.scss";
import Head from "next/head";
import { worksData } from "../data/worksData";
import Image from "next/image";

const Works: NextPage = () => {
  return (
    <>
      <Head>
        <title>Works | taito-t.com</title>
      </Head>
      <Layout>
        {worksData.map((data) => (
          <WorksCard>
            <Image src={data.img} alt="app_img" width={400} height={200} />
            <p>{data.appName}</p>
            <p>{data.description}</p>
            <p>{data.url}</p>
          </WorksCard>
        ))}
      </Layout>
    </>
  );
};

export default Works;
