import styles from "../../styles/Header.module.scss";
import Link from "next/link";

const Header: React.VFC = () => {
  return (
    <div className={styles.container}>
      <Link href="/">
        <p className={styles.header_home}>
          <a>taito-tanaka</a>
        </p>
      </Link>
      <Link href="/contact">
        <p className={styles.header_right}>
          <a>Contact</a>
        </p>
      </Link>
      <Link href="/works">
        <p className={styles.header_right}>
          <a>Works</a>
        </p>
      </Link>
      <Link href="/blog">
        <p className={styles.header_right}>
          <a>Blog</a>
        </p>
      </Link>
    </div>
  );
};

export default Header;
