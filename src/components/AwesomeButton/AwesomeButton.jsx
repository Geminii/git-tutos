import styles from "./AwesomeButton.module.css";

export const AwesomeButton = ({ children }) => {
  return <button className={styles.main}>{children}</button>;
};
