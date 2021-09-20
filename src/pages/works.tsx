import { NextPage } from "next";
import Layout from "../components/templates/layout";
import WhiteCard from "../components/atoms/WhiteCard";
import styles from "../styles/works.module.scss";

const Works: NextPage = () => {
  return (
    <Layout>
      <WhiteCard>
        <h1 className={styles.mente}>メンテナンス中です🙇‍♂️</h1>
      </WhiteCard>
    </Layout>
  );
};

export default Works;
