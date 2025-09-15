import EditHeader from "../EditHeader";
import Modal from "../UI/Modal";
import Form from "../Form";
import InvoiceFooter from "../InvoiceNewPage/InvoiceFooter";

const InvoiceNewPage = () => {
  return (
    <Modal>
      <EditHeader />
      <Form />
      <InvoiceFooter />
    </Modal>
  );
};

export default InvoiceNewPage;
