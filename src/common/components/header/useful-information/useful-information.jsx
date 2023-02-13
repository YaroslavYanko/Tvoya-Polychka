import styles from "../header.module.css";

export const UsefulInformation = () => {
  return (
    <div className={styles.container__usefulInformation}>
      <div className={styles.usefulInformation__info_box}>
        <div>
          <img
            src="https://images.prismic.io/nomakenolife/bf7fe107-fbe2-4a40-8361-32fb4c8bc848_shutterstock_1606357240+%281%29.png?auto=compress,format"
            alt=""
          />
        </div>
        <div className={styles.usefulInformation__title}>
          <h2>Простий посібник із корейського догляду за волоссям</h2>
        </div>
      </div>
      <div className={styles.usefulInformation__info_box}>
        <div>
          <img
            src="https://www.kmpayurvedic.com/wp-content/uploads/2020/01/Steps-Routine-for-a-Healthy-and-Fabulous-Hair.png"
            alt=""
          />
        </div>
        <div className={styles.usefulInformation__title}>
          <h2>Засоби для розчісування волосся</h2>
        </div>
      </div>
      <div className={styles.usefulInformation__info_box}>
        <div>
          <img
            src="https://www.kmpayurvedic.com/wp-content/uploads/2020/01/Steps-Routine-for-a-Healthy-and-Fabulous-Hair.png"
            alt=""
          />
        </div>
        <div className={styles.usefulInformation__title}>
          <h2>Засоби для розчісування волосся</h2>
        </div>
      </div>
    </div>
  );
};
