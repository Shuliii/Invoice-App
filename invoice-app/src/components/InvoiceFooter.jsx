import { useNavigate, useParams } from "react-router-dom";

import styles from "./InvoiceFooter.module.css";
import Button2 from "./UI/Button2";
import Button3 from "./UI/Button3";
import Button4 from "./UI/Button4";

const InvoiceFooter = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const handleEdit = () => {
    navigate(`/invoice/${id}/edit`);
  };
  return (
    <footer className={styles.InvoiceFooter}>
      <div className={styles.container}>
        <Button4 onClick={handleEdit}>Edit</Button4>
        <Button3>Delete</Button3>
        <Button2>Mark as Paid</Button2>
      </div>
    </footer>
  );
};
export default InvoiceFooter;
