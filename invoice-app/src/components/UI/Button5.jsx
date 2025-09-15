import styles from "./Button5.module.css";

const Button5 = ({children, onClick, type, className}) => {
  return (
    <button
      className={` ${styles.Button5} ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button5;
