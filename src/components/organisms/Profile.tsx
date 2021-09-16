import { ProfileType } from "../../data/profileData";
import Image from "next/image";

import styles from "../../styles/Profile.module.scss";

const Profile: React.VFC<ProfileType> = ({ name, img, birth, university }) => {
  return (
    <>
      <div className={styles.img_wrap}>
        <Image
          src={img}
          height={150}
          width={150}
          alt="profile-img"
          className={styles.img}
        />
      </div>
      <p className={styles.name}>{name}</p>
      <p>{birth}</p>
      <p>{university}</p>
    </>
  );
};

export default Profile;
