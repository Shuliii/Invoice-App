import {useNavigate, useParams} from "react-router-dom";

import styles from "./InvoiceFooter.module.css";
import Button2 from "../UI/Button2";
import Button5 from "../UI/Button5";
import Button4 from "../UI/Button4";
import Footer from "../UI/Footer";

const InvoiceFooter = ({form}) => {
  const {id} = useParams();
  const navigate = useNavigate();
  const handleClose = () => {
    navigate("/");
  };
  return (
    <Footer className={styles.InvoiceFooter}>
      <div className={styles.container}>
        <Button4 className={styles.button4} onClick={handleClose}>
          Discard
        </Button4>
        <Button5
          className={styles.button5}
          type="submit"
          form={form}
          value="draft"
        >
          Save As Draft
        </Button5>
        <Button2
          className={styles.button2}
          type="submit"
          form={form}
          value="send"
        >
          Save & Send
        </Button2>
      </div>
    </Footer>
  );
};
export default InvoiceFooter;
