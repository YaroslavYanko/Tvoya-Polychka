import styles from "../header.module.css";
import korean from "../../../images/korean.jpg"

export const UsefulInformation = () => {
  return (
    <div className={styles.container__usefulInformation}>
      <div className={styles.usefulInformation__info_box}>
        <img
          src={korean}
          alt="Корейський догляд за волоссям"
        />

        <div className={styles.usefulInformation__title}>
          <h2>Простий посібник із корейського догляду за волоссям</h2>
        </div>
      </div>
      <div className={styles.usefulInformation__info_box}>
        <img
          src={korean}
          alt=""
        />

        <div className={styles.usefulInformation__title}>
          <h2>Простий посібник із корейського догляду за волоссям</h2>
        </div>
      </div>
      <div className={styles.usefulInformation__info_box}>
        <img
          src={korean}
          alt=""
        />

        <div className={styles.usefulInformation__title}>
          <h2>Простий посібник із корейського догляду за волоссям</h2>
        </div>
      </div>
    </div>
  );
};
