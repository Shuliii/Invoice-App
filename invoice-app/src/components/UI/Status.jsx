import styles from "./Status.module.css";

const Status = ({children}) => {
  const capitalizedId = children.charAt(0).toUpperCase() + children.slice(1);
  const helper = "circle__" + capitalizedId;
  return (
    <div className={`${styles.status} ${styles[capitalizedId]}`}>
      <div className={`${styles.circle} ${styles[helper]}`}></div>
      {children}
    </div>
  );
};

export default Status;
