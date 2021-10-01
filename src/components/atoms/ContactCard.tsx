import styles from "../../styles/ContactCard.module.scss";
import Link from "next/link";

type Props = {
  account: string;
  id: string;
  url: string;
};

const ContactCard: React.VFC<Props> = ({ account, id, url }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.account}>{account}</p>
      <Link href={url}>
        <a className={styles.userid}>
          <p>{id}</p>
        </a>
      </Link>
    </div>
  );
};

export default ContactCard;
