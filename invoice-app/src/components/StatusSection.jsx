import styles from "./StatusSection.module.css";
import Status from "./UI/Status";

const StatusSection = ({invoice}) => {
  return (
    <div className={styles.StatusSection}>
      <div className={styles.container}>
        <div className={styles.Status__inner}>
          <p>Status</p>
          <Status>{invoice.status}</Status>
        </div>
      </div>
    </div>
  );
};

export default StatusSection;
