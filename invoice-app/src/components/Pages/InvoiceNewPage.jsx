import EditHeader from "../EditHeader";
import Modal from "../UI/Modal";
import Form from "../Form";
import InvoiceFooter from "../InvoiceNewPage/InvoiceFooter";

const InvoiceNewPage = () => {
  return (
    <Modal>
      <EditHeader />
      <Form id="invoice-form" />
      <InvoiceFooter form="invoice-form" />
    </Modal>
  );
};

export default InvoiceNewPage;
