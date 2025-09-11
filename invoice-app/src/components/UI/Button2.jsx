import styles from "./Button2.module.css";

const Button2 = ({ children, onClick, type }) => {
  return (
    <button className={styles.Button2} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button2;
