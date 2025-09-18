import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import styles from "./InvoiceFooter.module.css";
import Button2 from "../UI/Button2";
import Button3 from "../UI/Button3";
import Button4 from "../UI/Button4";
import Footer from "../UI/Footer";
import DeleteModal from "../UI/DeleteModal";
import { updateInvoice } from "../Data/Invoices";

const InvoiceFooter = ({ invoice }) => {
  const [state, setState] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const handleEdit = () => {
    navigate(`/invoice/${id}/edit`);
  };
  const handleDelete = () => {
    setState(true);
  };
  const handlePaid = () => {
    const newInvoice = { ...invoice, status: "paid" };
    updateInvoice(newInvoice);
    navigate("/");
  };
  return (
    <Footer className={styles.InvoiceFooter}>
      <div className={styles.container}>
        <Button4 onClick={handleEdit}>Edit</Button4>
        <Button3 onClick={handleDelete}>Delete</Button3>
        <Button2 onClick={handlePaid}>Mark as Paid</Button2>
      </div>
      {state && <DeleteModal id={id} onClose={() => setState(false)} />}
    </Footer>
  );
};
export default InvoiceFooter;
