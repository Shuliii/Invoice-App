import styles from "./Footer.module.css";

const Footer = ({className, children}) => {
  return (
    <footer className={`${className} ${styles.InvoiceFooter}`}>
      <div className={styles.container}>{children}</div>
    </footer>
  );
};

export default Footer;
