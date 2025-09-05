import styles from "./PrimaryButton.module.css";

import Plus from "../../assets/icon-plus.svg";

const PrimaryButton = ({children}) => {
  return (
    <button className={styles.button}>
      <span className={styles.plus__container}>
        <img src={Plus} alt="plus icon" />
      </span>
      <span> {children}</span>
    </button>
  );
};

export default PrimaryButton;
