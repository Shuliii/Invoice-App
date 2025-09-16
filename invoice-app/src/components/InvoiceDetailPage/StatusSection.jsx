import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useState } from "react";
import styles from "./StatusSection.module.css";
import Status from "../UI/Status";
import Button2 from "../UI/Button2";
import Button3 from "../UI/Button3";
import Button4 from "../UI/Button4";
import DeleteModal from "../UI/DeleteModal";

const StatusSection = ({ invoice }) => {
  const [state, setState] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const handleEdit = () => {
    navigate(`/invoice/${id}/edit`, {
      state: { backgroundLocation: location },
    });
  };
  const handleDelete = () => {
    setState(true);
  };
  return (
    <div className={styles.StatusSection}>
      <div className={styles.container}>
        <div className={styles.Status__inner}>
          <div className={styles.Status}>
            <p>Status</p>
            <Status>{invoice.status}</Status>
          </div>
          <div className={styles.button__groups}>
            <Button4 onClick={handleEdit}>Edit</Button4>
            <Button3 onClick={handleDelete}>Delete</Button3>
            <Button2>Mark as Paid</Button2>
          </div>
        </div>
      </div>
      {state && <DeleteModal id={id} onClose={() => setState(false)} />}
    </div>
  );
};

export default StatusSection;
