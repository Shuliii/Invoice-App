import styles from "./Form.module.css";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalendarIcon from "../assets/icon-calendar.svg";
import AddItem from "./InvoiceEditPage/AddItem";

const Form = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <fieldset>
          <legend className={styles.bill__from}>Bill From</legend>
          <div className={styles.bill__from__form}>
            <label>
              <span>Street Address</span>
              <input
                type="text"
                name="street-address"
                id="street-address"
                required
              />
            </label>
            <label>
              <span>City</span>
              <input type="text" name="city" id="city" required />
            </label>

            <label>
              <span>Post Code</span>
              <input type="text" name="post-code" id="post-code" required />
            </label>

            <label>
              <span>Country</span>
              <input type="text" name="country" id="country" required />
            </label>
          </div>
        </fieldset>

        <fieldset>
          <legend className={styles.bill__to}>Bill To</legend>
          <div className={styles.bill__to__form}>
            <label>
              <span>Client's Name</span>
              <input type="text" name="client-name" id="client-name" required />
            </label>
            <label>
              <span>Client'S Email</span>
              <input
                type="text"
                name="client-email"
                id="client-email"
                required
              />
            </label>
            <label>
              <span>Street Address</span>
              <input
                type="text"
                name="street-address"
                id="street-address"
                required
              />
            </label>
            <label>
              <span>City</span>
              <input type="text" name="city" id="city" required />
            </label>
            <label>
              <span>Post Code</span>
              <input type="text" name="post-code" id="post-code" required />
            </label>

            <label>
              <span>Country</span>
              <input type="text" name="country" id="country" required />
            </label>
          </div>
        </fieldset>

        <fieldset>
          <div className={styles.date__form}>
            <label>
              <span>Invoice Date</span>

              <DatePicker
                animate
                selected={date}
                onChange={(newDate) => setDate(newDate)}
                dateFormat="dd MMM yyyy" // e.g. 21 Aug 2021
                className="date-input"
                calendarClassName="calendar-popup" // style calendar
              />
              <img src={CalendarIcon} alt="" className="icon" />
            </label>
            <label>
              <span>Payment Term</span>
              <select name="payment-terms" required>
                <option value="30">Net 30 Days</option>
                <option value="60">Net 60 Days</option>
                <option value="90">Net 90 Days</option>
              </select>
            </label>
            <label>
              <span>Project Description</span>
              <input
                type="text"
                name="project-description"
                id="project-description"
                required
              />
            </label>
          </div>
        </fieldset>
        <AddItem />
      </form>
    </div>
  );
};

export default Form;
