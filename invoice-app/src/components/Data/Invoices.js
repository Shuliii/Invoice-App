import invoicesData from "./Data.json";

let invoices = [...invoicesData];

export const getInvoices = () => invoices;
export const getInvoiceById = (id) =>
  invoices.find((i) => String(i.id) === String(id));

export const deleteInvoice = (id) => {
  invoices = invoices.filter((i) => String(i.id) !== String(id));
  return invoices;
};
