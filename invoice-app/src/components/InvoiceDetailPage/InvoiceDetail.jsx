import styles from "./InvoiceDetail.module.css";
import InvoiceItem from "../InvoiceItem";

const InvoiceDetail = ({ invoice }) => {
  return (
    <section className={styles.InvoiceDetail}>
      <div className={styles.container}>
        <div className={styles.InvoiceDetail__inner}>
          <div className={styles.firstSection}>
            <div className={styles.id__section}>
              <h2>
                <span>#</span>
                {invoice.id}
              </h2>
              <p>{invoice.description}</p>
            </div>
            <div className={styles.senderAddress}>
              <p>{invoice.senderAddress.street}</p>
              <p>{invoice.senderAddress.city}</p>
              <p>{invoice.senderAddress.postCode}</p>
              <p>{invoice.senderAddress.country}</p>
            </div>
          </div>
          <div className={styles.secondSection}>
            <div className={styles.invoiceDate}>
              <p>Invoice Date</p>
              <h2>{invoice.createdAt}</h2>
            </div>
            <div className={styles.paymentDue}>
              <p>Payment Due</p>
              <h2>{invoice.paymentDue}</h2>
            </div>
            <div className={styles.email}>
              <p>Sent to</p>
              <h2>{invoice.clientEmail}</h2>
            </div>
            <div className={styles.clientAddress}>
              <h3 className={styles.billTo}>Bill To</h3>
              <h2>{invoice.clientName}</h2>
              <p>{invoice.clientAddress.street}</p>
              <p>{invoice.clientAddress.city}</p>
              <p>{invoice.clientAddress.postCode}</p>
              <p>{invoice.clientAddress.country}</p>
            </div>
          </div>
          <div className={styles.thirdSection}>
            <InvoiceItem items={invoice.items} total={invoice.total} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvoiceDetail;
