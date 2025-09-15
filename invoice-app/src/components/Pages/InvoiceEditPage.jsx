import EditHeader from "../EditHeader";
import Modal from "../UI/Modal";
import {getInvoiceById} from "../Data/Invoices";
import {useParams} from "react-router-dom";
import Form from "../Form";
import InvoiceFooter from "../InvoiceEditPage/InvoiceFooter";

const InvoiceEditPage = () => {
  const {id} = useParams();
  const invoice = getInvoiceById(id);
  return (
    <Modal>
      <EditHeader invoice={invoice} />
      <Form />
      <InvoiceFooter />
    </Modal>
  );
};

export default InvoiceEditPage;
