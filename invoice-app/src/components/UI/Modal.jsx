import { useNavigate, useParams, useLocation } from "react-router-dom";
import styles from "./Modal.module.css";

const Modal = ({ children }) => {
  const location = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();

  let backTo = "/";
  if (location.pathname.includes("/new")) {
    backTo = "/";
  } else backTo = `/invoice/${id}`;

  const handleClose = () => {
    navigate(backTo);
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
