import styles from "./AddItem.module.css";
import {useState} from "react";
import Button4 from "../UI/Button4";
import Delete from "../../assets/icon-delete.svg";

const AddItem = ({invoice}) => {
  // const [items, setItems] = useState([{id: 1, name: "", qty: 1, price: 0}]);
  const [items, setItems] = useState(() => {
    if (invoice?.items) {
      return invoice.items.map((item, index) => ({
        id: invoice.id, // generate id
        name: item.name || "",
        qty: item.quantity || null,
        price: item.price || null,
      }));
    }
    return [{id: 1, name: "", qty: null, price: null}]; // fallback
  });

  const addItem = () => {
    setItems([...items, {id: Date.now(), name: "", qty: 1, price: 0}]);
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const updateItem = (id, field, value) => {
    setItems(
      items.map((item) => (item.id === id ? {...item, [field]: value} : item))
    );
  };
  console.log(items);
  const helper = items.map((item) => (
    <div className={styles.addItem__form} key={item.id}>
      <label>
        <span>Item Name</span>
        <input
          type="text"
          id={item.id}
          name={item.id}
          // value={item.name}
          onChange={(e) => updateItem(item.id, "name", e.target.value)}
          required
          defaultValue={item.name}
        />
      </label>
      <label>
        <span>Qty.</span>
        <input
          type="number"
          id={item.qty}
          name={item.qty}
          step="1"
          required
          defaultValue={item.qty}
          onChange={(e) => updateItem(item.id, "qty", e.target.value)}
        />
      </label>
      <label>
        <span>Price</span>
        <input
          type="number"
          id={item.price}
          name={item.price}
          step="0.1"
          required
          defaultValue={item.price}
          onChange={(e) => updateItem(item.id, "price", e.target.value)}
        />
      </label>
      <div className={styles.total}>
        <span>Total</span>
        <output>{(item.qty * item.price).toFixed(2)}</output>
        <button
          type="button"
          onClick={() => removeItem(item.id)}
          disabled={items.length === 1}
        >
          <img src={Delete} alt="delete-icon" />
        </button>
      </div>
    </div>
  ));
  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.bill__to}>Item List</legend>
      {helper}
      <Button4 onClick={addItem} type="button" className={styles.button}>
        + Add New Item
      </Button4>
    </fieldset>
  );
};

export default AddItem;
