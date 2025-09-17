import invoicesData from "./Data.json";

let invoices = [...invoicesData];

export const getInvoices = () => invoices;
export const getInvoiceById = (id) =>
  invoices.find((i) => String(i.id) === String(id));

export const deleteInvoice = (id) => {
  invoices = invoices.filter((i) => String(i.id) !== String(id));
  return invoices;
};

export const addInvoice = (invoice) => {
  invoices.push(invoice);
  return invoice;
};

export const updateInvoice = (updatedInvoice) => {
  const index = invoices.findIndex(
    (i) => String(i.id) === String(updatedInvoice.id)
  );
  if (index !== -1) {
    invoices[index] = updatedInvoice; // replace old invoice
  }
};
