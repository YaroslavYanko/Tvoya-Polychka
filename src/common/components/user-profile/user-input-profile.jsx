import styles from './user-profile.module.css'

export const UserInputProfile = ({ title, children, footer }) => {

  return (
    <div className={styles.wrapper__profile_orders}>
      <h2>{title}</h2>
      {children}
      <div>{footer}</div>
    </div>
  );
};
