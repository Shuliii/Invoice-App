import {useNavigate, useParams} from "react-router-dom";

import styles from "./InvoiceFooter.module.css";
import Button2 from "../UI/Button2";
import Button3 from "../UI/Button3";
import Button4 from "../UI/Button4";
import Footer from "../UI/Footer";

const InvoiceFooter = ({form}) => {
  const navigate = useNavigate();
  const {id} = useParams();
  const handleCancel = () => {
    navigate(`/invoice/${id}/`);
  };
  return (
    <Footer className={styles.InvoiceFooter}>
      <div className={styles.container}>
        <Button4 onClick={handleCancel}>Cancel</Button4>
        <Button2 type="submit" form={form} value="save">
          Save Changes
        </Button2>
      </div>
    </Footer>
  );
};
export default InvoiceFooter;
