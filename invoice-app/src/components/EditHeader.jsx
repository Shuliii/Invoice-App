import styles from "./EditHeader.module.css";
import BackNavigation from "./BackNavigation";

const EditHeader = ({ invoice }) => {
  return (
    <div className={styles.EditHeader}>
      <div className={styles.backNavigation__container}>
        <BackNavigation />
      </div>
      <div className={styles.container}>
        <div className={styles.header}>
          <h3>
            Edit <span>#</span>
            {invoice.id}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default EditHeader;
