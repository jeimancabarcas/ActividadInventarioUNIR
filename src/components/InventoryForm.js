import React, { useState } from 'react';
import '../styles/InventoryForm.css';

const InventoryForm = ({ onAdd }) => {
  const [newItem, setNewItem] = useState({ name: '', quantity: 0, purchasePrice: 0, salePrice: 0 });

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedName = newItem.name.trim();
    if (trimmedName === '') {
      alert('El nombre del producto no puede estar vacío.');
      return;
    }

    if (newItem.quantity <= 0 || newItem.purchasePrice <= 0 || newItem.salePrice <= 0) {
      alert('Cantidad y precios deben ser mayores que cero.');
      return;
    }

    onAdd({ ...newItem, name: trimmedName, id: Date.now() });
    setNewItem({ name: '', quantity: 0, purchasePrice: 0, salePrice: 0 });
  };

  return (
    <form className="inventory__form" onSubmit={handleSubmit}>
      <label>
        Nombre
        <input
          className="inventory__input"
          type="text"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        />
      </label>
      <label>
        Cantidad
        <input
          className="inventory__input"
          type="number"
          value={newItem.quantity}
          onChange={(e) => setNewItem({ ...newItem, quantity: Math.max(0, Number(e.target.value)) })}
        />
      </label>
      <label>
        Precio de Compra
        <input
          className="inventory__input"
          type="number"
          value={newItem.purchasePrice}
          onChange={(e) => setNewItem({ ...newItem, purchasePrice: Math.max(0, Number(e.target.value)) })}
        />
      </label>
      <label>
        Precio de Venta
        <input
          className="inventory__input"
          type="number"
          value={newItem.salePrice}
          onChange={(e) => setNewItem({ ...newItem, salePrice: Math.max(0, Number(e.target.value)) })}
        />
      </label>
      <button className="inventory__button" type="submit">Agregar Producto</button>
    </form>
  );
};

export default InventoryForm;
