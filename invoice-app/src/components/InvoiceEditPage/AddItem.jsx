import styles from "./AddItem.module.css";
import {useState} from "react";

const AddItem = () => {
  const [items, setItems] = useState([{id: 1, name: "", qty: 1, price: 0}]);

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

  const helper = items.map((item) => {
    <>
      <label>
        <span>Item Name</span>
        <input type="text" id={item.id} name={item.id} required />
      </label>
      <label>
        <span>Qty.</span>
        <input type="number" id={item.qty} name={item.qty} step="1" required />
      </label>
      <label>
        <span>Price</span>
        <input
          type="text"
          id={item.price}
          name={item.price}
          step="0.1"
          required
        />
      </label>
      <label>
        <span>Item Name</span>
        <input type="text" id={item.id} name={item.id} disabled />
      </label>
    </>;
  });
  return (
    <fieldset>
      <div className={styles.addItem__form}>{helper}</div>
    </fieldset>
  );
};

export default AddItem;
