import styles from "../../styles/ThinWhiteCard.module.scss";

type Props = {
  children: React.ReactNode;
  title?: string;
};

const ThinWhiteCard: React.FC<Props> = ({ children, title }) => {
  return (
    <div className={styles.wrapper}>
      {title ? <p className={styles.title}>{title}</p> : null}
      <main>{children}</main>
    </div>
  );
};

export default ThinWhiteCard;
