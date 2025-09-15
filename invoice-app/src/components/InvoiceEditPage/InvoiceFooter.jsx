import {useNavigate, useParams} from "react-router-dom";

import styles from "./InvoiceFooter.module.css";
import Button2 from "../UI/Button2";
import Button3 from "../UI/Button3";
import Button4 from "../UI/Button4";
import Footer from "../UI/Footer";

const InvoiceFooter = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  //   const handleEdit = () => {
  //     navigate(`/invoice/${id}/edit`);
  //   };
  return (
    <Footer className={styles.InvoiceFooter}>
      <div className={styles.container}>
        <Button4>Cancel</Button4>
        <Button2>Save Changes</Button2>
      </div>
    </Footer>
  );
};
export default InvoiceFooter;
