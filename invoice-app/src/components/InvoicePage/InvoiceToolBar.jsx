import PrimaryButton from "../UI/PrimaryButton";
import styles from "./InvoiceToolBar.module.css";
import ArrowDown from "../../assets/icon-arrow-down.svg";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const InvoiceToolBar = ({ filters, toggleFilter }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const newHandler = () => {
    navigate(`/invoice/new`, {
      state: { backgroundLocation: location },
    });
  };
  return (
    <div className={styles.InvoiceToolBar}>
      <div className={styles.container}>
        <div className={styles.container__left}>
          <h1>Invoices</h1>
          <p>No Invoices</p>
        </div>
        <div className={styles.container__right}>
          <div
            className={styles.filter}
            onClick={() => setOpen((prev) => !prev)}
          >
            <h2>
              <span className={styles.textFull}>Filter by Status</span>
              <span className={styles.textShort}>Filter</span>
            </h2>
            <img src={ArrowDown} alt="arrow" />
            {open && (
              <div
                className={styles.dropdown}
                onClick={(e) => e.stopPropagation()}
              >
                <label>
                  <input
                    type="checkbox"
                    checked={filters.includes("draft")}
                    onChange={() => toggleFilter("draft")}
                  />
                  Draft
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={filters.includes("pending")}
                    onChange={() => toggleFilter("pending")}
                  />{" "}
                  Pending
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={filters.includes("paid")}
                    onChange={() => toggleFilter("paid")}
                  />{" "}
                  Paid
                </label>
              </div>
            )}
          </div>

          <PrimaryButton onClick={newHandler}>
            <span className={styles.textFull}>New Invoice</span>
            <span className={styles.textShort}>New</span>
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default InvoiceToolBar;
