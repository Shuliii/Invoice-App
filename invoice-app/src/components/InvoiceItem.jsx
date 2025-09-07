import styles from "./InvoiceItem.module.css";

const InvoiceItem = ({items}) => {
  const helper = items.map((item, i) => {
    return (
      <div key={item.name} className={styles.row}>
        <div className={styles.name}>{item.name}</div>
        <div className={styles.quantity}>{item.quantity}</div>
        <div className={styles.price}>{item.price}</div>
        <div className={styles.total}>{item.total}</div>
        <div
          className={styles.sublines}
        >{`${item.quantity} x £ ${item.price}`}</div>
      </div>
    );
  });
  return (
    <>
      <div className={styles.InvoiceItem}>
        <div className={styles.header}>
          <div>Item Name</div>
          <div>QTY.</div>
          <div>Price</div>
          <div>Total</div>
        </div>
        <div className={styles.row__container}>{helper}</div>
      </div>
    </>
  );
};

export default InvoiceItem;
