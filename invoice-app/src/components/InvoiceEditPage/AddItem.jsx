import styles from "./AddItem.module.css";
import Button4 from "../UI/Button4";
import Delete from "../../assets/icon-delete.svg";
import { useEffect } from "react";
const AddItem = ({ formData, setFormData }) => {
  // useEffect(() => {
  //   if (!formData.items || formData.items.length === 0) {
  //     setFormData((prev) => ({
  //       ...prev,
  //       items: [{ id: Date.now(), name: "", quantity: 1, price: 0, total: 0 }],
  //     }));
  //   } else {
  //     setFormData((prev) => ({
  //       ...prev,
  //       items: prev.items.map((item, idx) => ({
  //         ...item,
  //         id: item.id || Date.now() + idx,
  //       })),
  //     }));
  //   }
  // }, [formData.items, setFormData]);
  if (!formData.items || formData.items.length === 0) {
    setFormData((prev) => ({
      ...prev,
      items: [{ id: Date.now(), name: "", quantity: 1, price: 0, total: 0 }],
    }));
  }
  // --- Add a new empty item ---
  const addItem = () => {
    setFormData((prev) => ({
      ...prev,
      items: [
        ...prev.items,
        { id: Date.now(), name: "", quantity: 1, price: 0, total: 0 },
      ],
    }));
  };

  // --- Remove item by id ---
  const removeItem = (id) => {
    setFormData((prev) => ({
      ...prev,
      items:
        prev.items.length > 1
          ? prev.items.filter((item) => item.id !== id)
          : prev.items, // prevent removing last one
    }));
  };

  // --- Update item field ---
  const updateItem = (id, field, value) => {
    setFormData((prev) => ({
      ...prev,
      items: prev.items.map((item) =>
        item.id === id
          ? {
              ...item,
              [field]: value,
              total:
                field === "price"
                  ? (item.quantity || 0) * value
                  : field === "quantity"
                  ? value * (item.price || 0)
                  : item.total,
            }
          : item
      ),
    }));
  };

  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.bill__to}>Item List</legend>

      {formData.items.map((item) => (
        <div className={styles.addItem__form} key={item.id}>
          <label>
            <span>Item Name</span>
            <input
              type="text"
              defaultValue={item.name}
              onChange={(e) => updateItem(item.id, "name", e.target.value)}
              required
            />
          </label>

          <label>
            <span>Qty.</span>
            <input
              type="number"
              step="1"
              defaultValue={item.quantity}
              onChange={(e) =>
                updateItem(item.id, "quantity", Number(e.target.value))
              }
              required
            />
          </label>

          <label>
            <span>Price</span>
            <input
              type="number"
              step="0.1"
              defaultValue={item.price}
              onChange={(e) =>
                updateItem(item.id, "price", Number(e.target.value))
              }
              required
            />
          </label>

          <div className={styles.total}>
            <span>Total</span>
            <output>{(item.quantity * item.price).toFixed(2)}</output>
            <button
              type="button"
              onClick={() => removeItem(item.id)}
              disabled={formData.items.length === 1}
            >
              <img src={Delete} alt="delete-icon" />
            </button>
          </div>
        </div>
      ))}

      <Button4 onClick={addItem} type="button" className={styles.button}>
        + Add New Item
      </Button4>
    </fieldset>
  );
};

export default AddItem;
