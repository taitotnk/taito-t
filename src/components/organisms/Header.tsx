import styles from "../../styles/Header.module.scss";
import Link from "next/link";

const Header: React.VFC = () => {
  return (
    <>
      <header>
        <div className={styles.container}>
          <Link href="/">
            <p className={styles.header_home}>taito-t.com</p>
          </Link>
          <Link href="/blog">
            <p className={styles.header_right}>Blog</p>
          </Link>
          <Link href="/contact">
            <p className={styles.header_right}>Contact</p>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
