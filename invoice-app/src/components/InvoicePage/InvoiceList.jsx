import styles from "./InvoiceList.module.css";
import InvoiceCard from "../InvoiceCard";

import {getInvoices} from "../Data/Invoices";
import {useState} from "react";

import Empty from "../../assets/illustration-empty.svg";

const InvoiceList = () => {
  const [Data, setData] = useState(getInvoices());
  // const Data = getInvoices();
  let InvoiceListHelper = "";
  if (!Data || Data.length === 0) {
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
        <InvoiceCard
          id={item.id}
          clientName={item.clientName}
          paymentDue={item.paymentDue}
          total={item.total}
          status={item.status}
          key={item.id}
        ></InvoiceCard>
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
