import Layout from "../components/templates/layout";
import Head from "next/head";
import styles from "../styles/index.module.scss";
import { siteTitle } from "../components/templates/layout";
import Image from "next/image";
import { NextPage } from "next";
import WhiteCard from "../components/atoms/WhiteCard";
import profileData from "../data/profileData";
import Profile from "../components/organisms/Profile";
import { data } from "remark";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>About me</title>
        <meta name="og:title" content={siteTitle} />
        <meta
          property="og:image"
          content="https://taito-t.com/images/taitologo.jpg"
        />
      </Head>
      <WhiteCard title={"Profile"}>
        <Profile
          name={profileData.name}
          img={profileData.img}
          birth={profileData.birth}
          university={profileData.university}
          introduction={profileData.introduction}
        />
      </WhiteCard>
      <WhiteCard title={"Skill"}></WhiteCard>
    </Layout>
  );
};

export default Home;
