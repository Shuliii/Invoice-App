import styles from "./EditHeader.module.css";
import BackNavigation from "./BackNavigation";
import {useParams} from "react-router-dom";

const EditHeader = () => {
  const {id} = useParams();
  return (
    <div className={styles.EditHeader}>
      <div className={styles.backNavigation__container}>
        <BackNavigation />
      </div>
      <div className={styles.container}>
        <div className={styles.header}>
          {id ? (
            <h3>
              Edit <span>#</span>
              {id}
            </h3>
          ) : (
            <h3>New Invoice</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditHeader;
