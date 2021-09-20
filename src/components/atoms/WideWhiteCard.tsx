import styles from "../../styles/WideWhiteCard.module.scss";

type Props = {
  children: React.ReactNode;
  title?: string;
};

const WideWhiteCard: React.FC<Props> = ({ children, title }) => {
  return (
    <div className={styles.wrapper}>
      {title ? <p className={styles.title}>{title}</p> : null}
      <main>{children}</main>
    </div>
  );
};

export default WideWhiteCard;
