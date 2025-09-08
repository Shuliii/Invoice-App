import { useNavigate, useParams } from "react-router-dom";
import styles from "./StatusSection.module.css";
import Status from "./UI/Status";
import Button2 from "./UI/Button2";
import Button3 from "./UI/Button3";
import Button4 from "./UI/Button4";

const StatusSection = ({ invoice }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const handleEdit = () => {
    navigate(`/invoice/${id}/edit`);
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
            <Button3>Delete</Button3>
            <Button2>Mark as Paid</Button2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusSection;
