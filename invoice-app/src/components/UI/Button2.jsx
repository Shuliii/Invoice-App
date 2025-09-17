import styles from "./Button2.module.css";

const Button2 = ({children, onClick, type, className, form, value}) => {
  return (
    <button
      className={`${styles.Button2} ${className}`}
      onClick={onClick}
      type={type}
      form={form}
      value={value}
    >
      {children}
    </button>
  );
};

export default Button2;
