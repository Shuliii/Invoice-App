import styles from "./InvoiceCard.module.css";
import Status from "./UI/Status";
import ArrowRight from "../assets/icon-arrow-right.svg";

const InvoiceCard = ({id, clientName, paymentDue, total, status}) => {
  return (
    <div className={styles.InvoiceCard}>
      <div className={styles.invoice__id}>
        <span className={styles.hex}>#</span>
        {id}
      </div>
      <div className={styles.client__name}>{clientName}</div>
      <div className={styles.due__date}>
        <span className={styles.due}>Due </span>
        {paymentDue}
      </div>
      <div className={styles.total}>£ {total}</div>
      <img className={styles.arrow} src={ArrowRight} alt="arrow right icon" />
      <Status className={styles.status}>{status}</Status>
    </div>
  );
};

export default InvoiceCard;
