import styles from "./Button4.module.css";

const Button4 = ({ children, onClick }) => {
  return (
    <button className={styles.Button4} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button4;
