import BackNavigation from "../BackNavigation";
import StatusSection from "../StatusSection";
import InvoiceDetail from "../InvoiceDetail";
import InvoiceFooter from "../InvoiceFooter";
import { useParams } from "react-router-dom";
import { getInvoiceById } from "../Data/Invoices";
const InvoiceDetailPage = () => {
  const { id } = useParams();
  const invoice = getInvoiceById(id);
  return (
    <>
      <BackNavigation />
      <StatusSection invoice={invoice} />
      <InvoiceDetail invoice={invoice} />
      <InvoiceFooter />
    </>
  );
};

export default InvoiceDetailPage;
