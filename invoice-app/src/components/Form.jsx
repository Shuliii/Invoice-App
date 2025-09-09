import styles from "./Form.module.css";

const Form = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <fieldset>
          <legend className={styles.bill__from}>Bill From</legend>
          <div className={styles.bill__from__form}>
            <label className={styles.street__address}>
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
      </form>
    </div>
  );
};

export default Form;
