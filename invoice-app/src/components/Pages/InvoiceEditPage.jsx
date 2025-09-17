import EditHeader from "../EditHeader";
import Modal from "../UI/Modal";
import {getInvoiceById} from "../Data/Invoices";
import {useParams} from "react-router-dom";
import Form from "../Form";
import InvoiceFooter from "../InvoiceEditPage/InvoiceFooter";

const InvoiceEditPage = () => {
  const {id} = useParams();
  const invoice = getInvoiceById(id);
  console.log(invoice);
  return (
    <Modal>
      <EditHeader invoice={invoice} />
      <Form invoice={invoice} id="invoice-form" />
      <InvoiceFooter form="invoice-form" />
    </Modal>
  );
};

export default InvoiceEditPage;
