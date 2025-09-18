import styles from "./Form.module.css";
import { useState } from "react";
import { format, addDays } from "date-fns";
import { addInvoice, updateInvoice } from "./Data/Invoices";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalendarIcon from "../assets/icon-calendar.svg";
import AddItem from "./InvoiceEditPage/AddItem";
import { useNavigate } from "react-router-dom";

// A blank invoice template for "New Invoice"
const blankInvoice = {
  senderAddress: { street: "", city: "", postCode: "", country: "" },
  clientAddress: { street: "", city: "", postCode: "", country: "" },
  clientName: "",
  clientEmail: "",
  createdAt: "",
  paymentTerms: 1,
  paymentDue: "",
  description: "",
  items: [],
};

const Form = ({ invoice, id }) => {
  // Seed form state: use invoice (edit mode) or blank (new mode)
  const [formData, setFormData] = useState(invoice || blankInvoice);
  const [date, setDate] = useState(invoice?.createdAt || null);
  const Navigate = useNavigate();

  // --- Helpers to update state ---
  const updateSender = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      senderAddress: { ...prev.senderAddress, [field]: value },
    }));
  };

  const updateClient = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      clientAddress: { ...prev.clientAddress, [field]: value },
    }));
  };

  const updateData = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // --- Submit handler ---
  const submitHandler = (e) => {
    e.preventDefault();
    const action = e.nativeEvent.submitter.value;

    const total = formData.items.reduce(
      (sum, item) => sum + (Number(item.total) || 0),
      0
    );
    let newInvoice = {
      ...formData,
      id: formData.id || new Date().getTime(),
      total,
    };

    if (action === "draft") {
      newInvoice = { ...newInvoice, status: "draft" };
      addInvoice(newInvoice);
    }

    if (action === "send") {
      newInvoice = { ...newInvoice, status: "pending" };
      addInvoice(newInvoice);
    }

    if (action === "save") {
      updateInvoice(newInvoice);
    }

    Navigate("/");
  };
  console.log(formData);
  // --- Render ---
  return (
    <div className={styles.container}>
      <form className={styles.form} id={id} onSubmit={submitHandler}>
        {/* Bill From */}
        <fieldset>
          <legend className={styles.bill__from}>Bill From</legend>
          <div className={styles.bill__from__form}>
            <label>
              <span>Street Address</span>
              <input
                type="text"
                required
                defaultValue={formData.senderAddress.street}
                onChange={(e) => updateSender("street", e.target.value)}
              />
            </label>
            <label>
              <span>City</span>
              <input
                type="text"
                required
                defaultValue={formData.senderAddress.city}
                onChange={(e) => updateSender("city", e.target.value)}
              />
            </label>
            <label>
              <span>Post Code</span>
              <input
                type="text"
                required
                defaultValue={formData.senderAddress.postCode}
                onChange={(e) => updateSender("postCode", e.target.value)}
              />
            </label>
            <label>
              <span>Country</span>
              <input
                type="text"
                required
                defaultValue={formData.senderAddress.country}
                onChange={(e) => updateSender("country", e.target.value)}
              />
            </label>
          </div>
        </fieldset>

        {/* Bill To */}
        <fieldset>
          <legend className={styles.bill__to}>Bill To</legend>
          <div className={styles.bill__to__form}>
            <label>
              <span>Client's Name</span>
              <input
                type="text"
                required
                defaultValue={formData.clientName}
                onChange={(e) => updateData("clientName", e.target.value)}
              />
            </label>
            <label>
              <span>Client's Email</span>
              <input
                type="email"
                required
                defaultValue={formData.clientEmail}
                onChange={(e) => updateData("clientEmail", e.target.value)}
              />
            </label>
            <label>
              <span>Street Address</span>
              <input
                type="text"
                required
                defaultValue={formData.clientAddress.street}
                onChange={(e) => updateClient("street", e.target.value)}
              />
            </label>
            <label>
              <span>City</span>
              <input
                type="text"
                required
                defaultValue={formData.clientAddress.city}
                onChange={(e) => updateClient("city", e.target.value)}
              />
            </label>
            <label>
              <span>Post Code</span>
              <input
                type="text"
                required
                defaultValue={formData.clientAddress.postCode}
                onChange={(e) => updateClient("postCode", e.target.value)}
              />
            </label>
            <label>
              <span>Country</span>
              <input
                type="text"
                required
                defaultValue={formData.clientAddress.country}
                onChange={(e) => updateClient("country", e.target.value)}
              />
            </label>
          </div>
        </fieldset>

        {/* Invoice Details */}
        <fieldset>
          <div className={styles.date__form}>
            <label>
              <span>Invoice Date</span>
              <DatePicker
                selected={date ? new Date(date) : null}
                dateFormat="dd MMM yyyy"
                className="date-input"
                calendarClassName="calendar-popup"
                onChange={(date) => {
                  setDate(date);
                  updateData("createdAt", format(date, "yyyy-MM-dd"));
                }}
              />
              <img src={CalendarIcon} alt="" className="icon" />
            </label>
            <label>
              <span>Payment Term</span>
              <select
                required
                value={formData.paymentTerms}
                onChange={(e) => {
                  const days = parseInt(e.target.value, 10);
                  const baseDate = formData.createdAt
                    ? new Date(formData.createdAt)
                    : new Date();
                  const dueDate = format(addDays(baseDate, days), "yyyy-MM-dd");

                  setFormData((prev) => ({
                    ...prev,
                    paymentTerms: days,
                    paymentDue: dueDate,
                  }));
                }}
              >
                <option value="1">Net 1 Day</option>
                <option value="7">Net 7 Days</option>
                <option value="14">Net 14 Days</option>
                <option value="30">Net 30 Days</option>
              </select>
            </label>
            <label>
              <span>Project Description</span>
              <input
                type="text"
                required
                defaultValue={formData.description}
                onChange={(e) => updateData("description", e.target.value)}
              />
            </label>
          </div>
        </fieldset>

        {/* Items */}
        <AddItem formData={formData} setFormData={setFormData} />
      </form>
    </div>
  );
};

export default Form;
