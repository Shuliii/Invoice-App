import styles from "./Button5.module.css";

const Button5 = ({children, onClick, type, className, form, value}) => {
  return (
    <button
      className={` ${styles.Button5} ${className}`}
      onClick={onClick}
      type={type}
      form={form}
      value={value}
    >
      {children}
    </button>
  );
};

export default Button5;
