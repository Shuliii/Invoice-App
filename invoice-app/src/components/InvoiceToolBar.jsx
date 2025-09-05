import PrimaryButton from "./UI/PrimaryButton";
import styles from "./InvoiceToolBar.module.css";
import ArrowDown from "../assets/icon-arrow-down.svg";

const InvoiceToolBar = () => {
  return (
    <div className={styles.InvoiceToolBar}>
      <div className={styles.container}>
        <div className={styles.container__left}>
          <h1>Invoices</h1>
          <p>No Invoices</p>
        </div>
        <div className={styles.container__right}>
          <div className={styles.filter}>
            <h2>
              <span className={styles.textFull}>Filter by Status</span>
              <span className={styles.textShort}>Filter</span>
            </h2>
            <img src={ArrowDown} alt="arrow" />
          </div>
          <PrimaryButton>
            <span className={styles.textFull}>New Invoice</span>
            <span className={styles.textShort}>New</span>
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default InvoiceToolBar;
