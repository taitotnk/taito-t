import styles from "../../styles/Header.module.scss";
import Link from "next/link";

const Header: React.VFC = () => {
  return (
    <div className={styles.container}>
      <p className={styles.header_home}>
        <Link href="/">
          <a>taito-tanaka</a>
        </Link>
      </p>
      <p className={styles.header_right}>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </p>
      <p className={styles.header_right}>
        <Link href="/works">
          <a>Works</a>
        </Link>
      </p>
      <p className={styles.header_right}>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </p>
    </div>
  );
};

export default Header;
