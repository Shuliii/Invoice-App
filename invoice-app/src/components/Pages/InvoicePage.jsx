import InvoiceToolBar from "../InvoicePage/InvoiceToolBar";
import InvoiceList from "../InvoicePage/InvoiceList";

import { useState } from "react";
import { getInvoices } from "../Data/Invoices";

const InvoicePage = () => {
  const [filters, setFilters] = useState([]);
  const toggleFilter = (status) =>
    setFilters((prev) =>
      prev.includes(status)
        ? prev.filter((f) => f !== status)
        : [...prev, status]
    );
  const invoice = getInvoices();
  const Data =
    filters.length === 0
      ? invoice
      : invoice.filter((inv) => filters.includes(inv.status));

  console.log(Data);
  return (
    <>
      <InvoiceToolBar filters={filters} toggleFilter={toggleFilter} />
      <InvoiceList Data={Data} />
    </>
  );
};

export default InvoicePage;
