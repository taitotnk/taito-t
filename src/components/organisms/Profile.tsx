import { ProfileType } from "../../data/profileData";
import Image from "next/image";

import styles from "../../styles/Profile.module.scss";

const Profile: React.VFC<ProfileType> = ({ name, img, birth, university }) => {
  return (
    <>
      <div className={styles.img_wrap}>
        <Image
          src={img}
          height={120}
          width={120}
          alt="profile-img"
          className={styles.img}
        />
      </div>
      <p className={styles.name}>{name}</p>
      <p className={styles.birth}>🎂 {birth}</p>
      <p className={styles.university}>🏫 {university}</p>
    </>
  );
};

export default Profile;
