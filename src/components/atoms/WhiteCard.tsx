import styles from "../../styles/WhiteCard.module.scss";

type Props = {
  children: React.ReactNode;
  title?: string;
};

const WhiteCard: React.FC<Props> = ({ children, title }) => {
  return (
    <div className={styles.wrapper}>
      {title ? <p className={styles.title}>{title}</p> : null}
      <main>{children}</main>
    </div>
  );
};

export default WhiteCard;
