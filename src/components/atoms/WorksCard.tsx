import styles from "../../styles/WorksCard.module.scss";

type Props = {
  children: React.ReactNode;
};

const WorksCard: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <main>{children}</main>
    </div>
  );
};

export default WorksCard;
