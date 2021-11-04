import { careerData, careerType } from "../../data/careerData";
import styles from "../../styles/CareerList.module.scss";

const CareerList: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      {careerData.map((data) => (
        <div className={styles.container}>
          <div className={styles.date}>{data.date}</div>
          <div className={styles.title}>{data.title}</div>
        </div>
      ))}
    </div>
  );
};

export default CareerList;
