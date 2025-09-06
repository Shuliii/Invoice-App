import invoices from "./Data.json";

export const getInvoices = () => invoices;
export const getInvoiceById = (id) =>
  invoices.find((i) => String(i.id) === String(id));
