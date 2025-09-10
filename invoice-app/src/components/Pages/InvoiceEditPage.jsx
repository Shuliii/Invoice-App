import EditHeader from "../EditHeader";
import Modal from "../UI/Modal";
import {getInvoiceById} from "../Data/Invoices";
import {useParams} from "react-router-dom";
import Form from "../Form";

const InvoiceEditPage = () => {
  const {id} = useParams();
  const invoice = getInvoiceById(id);
  return (
    <Modal>
      <EditHeader invoice={invoice} />
      <Form />
    </Modal>
  );
};

export default InvoiceEditPage;
