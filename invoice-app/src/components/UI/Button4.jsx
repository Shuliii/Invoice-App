import styles from "./Button4.module.css";

const Button4 = ({ children, onClick, type, className }) => {
  return (
    <button
      className={`${styles.Button4} ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button4;
