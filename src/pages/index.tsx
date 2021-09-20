import Layout from "../components/templates/layout";
import Head from "next/head";
import { siteTitle } from "../components/templates/layout";
import { NextPage } from "next";
import WhiteCard from "../components/atoms/WhiteCard";
import profileData from "../data/profileData";
import Profile from "../components/organisms/Profile";
import SkillList from "../components/organisms/SkillList";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>taito-t.com</title>
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
      <WhiteCard title={"Skill"}>
        <SkillList
          TypeScript={true}
          JavaScipt={true}
          Python={true}
          C={true}
          OCaml={true}
          HTML={true}
          CSS={true}
          React={true}
          Next={true}
          Django={true}
        />
      </WhiteCard>
    </Layout>
  );
};

export default Home;
