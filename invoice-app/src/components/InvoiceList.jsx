import styles from "./InvoiceList.module.css";
import InvoiceCard from "./InvoiceCard";

import Data from "./Data/Data.json";

import Empty from "../assets/illustration-empty.svg";

const InvoiceList = () => {
  console.log(Data);
  let InvoiceListHelper = "";
  if (!Data) {
    InvoiceListHelper = (
      <div className={styles.empty__container}>
        <img src={Empty} alt="empty illustration image" />
        <div className={styles.textbox}>
          <h2>There is nothing here</h2>
          <p>
            Create an invoice by clicking the <span>New</span>
            <span className={styles.invoice}> Invoice</span> button and get
            started
          </p>
        </div>
      </div>
    );
  } else {
    InvoiceListHelper = Data.map((item) => {
      return (
        <>
          <InvoiceCard
            id={item.id}
            clientName={item.clientName}
            paymentDue={item.paymentDue}
            total={item.total}
            status={item.status}
            key={item.id}
          ></InvoiceCard>
        </>
      );
    });
  }
  return (
    <div className={styles.InvoiceList}>
      <div className={styles.container}>{InvoiceListHelper}</div>
    </div>
  );
};

export default InvoiceList;
