import { useNavigate } from "react-router-dom";
import styles from "./Modal.module.css";

const Modal = ({ children }) => {
  const navigate = useNavigate();
  const handleClose = () => {
    navigate(-1);
  };
  return (
    <div className={styles.backdrop} onClick={handleClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
