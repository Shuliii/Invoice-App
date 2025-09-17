import styles from "./Button3.module.css";

const Button3 = ({children, onClick, type, form}) => {
  return (
    <button
      className={styles.Button3}
      onClick={onClick}
      type={type}
      form={form}
    >
      {children}
    </button>
  );
};

export default Button3;
