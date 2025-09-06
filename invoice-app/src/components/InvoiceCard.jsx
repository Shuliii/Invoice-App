import {Link} from "react-router-dom";
import styles from "./InvoiceCard.module.css";
import Status from "./UI/Status";
import ArrowRight from "../assets/icon-arrow-right.svg";

const InvoiceCard = ({id, clientName, paymentDue, total, status}) => {
  const dateStr = paymentDue;
  const date = new Date(dateStr);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const formattedDate = `${date.getDate()} ${
    months[date.getMonth()]
  } ${date.getFullYear()}`;
  return (
    <Link to={`/invoice/${id}`} className={styles.InvoiceCard}>
      <div className={styles.invoice__id}>
        <span className={styles.hex}>#</span>
        {id}
      </div>
      <div className={styles.client__name}>{clientName}</div>
      <div className={styles.due__date}>
        <span className={styles.due}>Due </span>
        {formattedDate}
      </div>
      <div className={styles.total}>£ {total}</div>
      <img className={styles.arrow} src={ArrowRight} alt="arrow right icon" />
      <Status className={styles.status}>{status}</Status>
    </Link>
  );
};

export default InvoiceCard;
