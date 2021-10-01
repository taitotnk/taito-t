import Link from "next/link";
import styles from "../../styles/Footer.module.scss";

const Footer: React.VFC = () => {
  return (
    <div>
      <p className={styles.privacy}>
        <Link href="/policy">
          <a>プライバシーポリシー</a>
        </Link>
      </p>
      <p className={styles.copyright}>© 2021 Copyright taito-tanaka</p>
    </div>
  );
};

export default Footer;
