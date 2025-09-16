import styles from "./DeleteModal.module.css";
import Button4 from "./Button4";
import Button3 from "./Button3";
import { useNavigate } from "react-router-dom";
import { deleteInvoice } from "../Data/Invoices";

const DeleteModal = ({ id, onClose }) => {
  const navigate = useNavigate();
  const handleDelete = () => {
    deleteInvoice(id);
    navigate("/");
  };
  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.text}>
          <h1>Confirm Deletion</h1>
          <p>
            Are you sure you want to delete invoice #{id}? This action cannot be
            undone.
          </p>
        </div>
        <div className={styles.buttons__container}>
          <Button4 onClick={onClose}>Cancel</Button4>
          <Button3 onClick={handleDelete}>Delete</Button3>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
