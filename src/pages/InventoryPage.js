import React, { useState } from 'react';
import '../styles/InventoryPage.css';
import InventoryTable from './InventoryTable';

const InventoryPage = ({ inventory, setInventory }) => {
  const [newItem, setNewItem] = useState({ name: '', quantity: 0 });

  const addItem = () => {
    const trimmedName = newItem.name.trim();
    const existingItem = inventory.find(item => item.name.toLowerCase() === trimmedName.toLowerCase());
    if (existingItem) {
      alert('El producto ya existe en el inventario.');
    } else {
      setInventory([...inventory, { ...newItem, name: trimmedName, id: Date.now() }]);
      setNewItem({ name: '', quantity: 0 });
    }
  };

  const deleteItem = (id) => {
    setInventory(inventory.filter(item => item.id !== id));
  };

  const editItem = (id, quantity) => {
    setInventory(inventory.map(item => item.id === id ? { ...item, quantity } : item));
  };

  return (
    <div className="inventory">
      <h2 className="inventory__title">Inventario</h2>
      <InventoryTable
        inventory={inventory}
        onEdit={editItem}
        onDelete={deleteItem}
        editable={true}
      />
      <div className="inventory__form">
        <input
          className="inventory__input"
          type="text"
          placeholder="Nombre"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        />
        <input
          className="inventory__input"
          type="number"
          placeholder="Cantidad"
          value={newItem.quantity}
          onChange={(e) => setNewItem({ ...newItem, quantity: Number(e.target.value) })}
        />
        <button className="inventory__button" onClick={addItem}>Agregar Producto</button>
      </div>
    </div>
  );
}

export default InventoryPage;
