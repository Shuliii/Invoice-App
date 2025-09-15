import styles from "./PrimaryButton.module.css";

import Plus from "../../assets/icon-plus.svg";

const PrimaryButton = ({children, onClick, type}) => {
  return (
    <button className={styles.button} type={type} onClick={onClick}>
      <span className={styles.plus__container}>
        <img src={Plus} alt="plus icon" />
      </span>
      <span> {children}</span>
    </button>
  );
};

export default PrimaryButton;
