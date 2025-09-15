import styles from "./Button2.module.css";

const Button2 = ({children, onClick, type, className}) => {
  return (
    <button
      className={`${styles.Button2} ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button2;
