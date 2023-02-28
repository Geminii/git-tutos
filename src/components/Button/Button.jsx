import styles from "./Button.module.css";

export const Button = ({ children }) => {
  return <button className={styles.main}>{children}</button>;
};
