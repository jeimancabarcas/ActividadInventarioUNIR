import React, { useState } from 'react';
import '../styles/SalesPage.css';
import InventoryTable from './InventoryTable';

const SalesPage = ({ sales, setSales, inventory, setInventory }) => {
  const [selectedItem, setSelectedItem] = useState('');
  const [quantity, setQuantity] = useState(0);

  const addSale = () => {
    const item = inventory.find(item => item.name === selectedItem);
    if (item && item.quantity >= quantity) {
      setSales([...sales, { name: selectedItem, quantity, id: Date.now() }]);
      setInventory(inventory.map(i => i.name === item.name ? { ...i, quantity: i.quantity - quantity } : i));
      setSelectedItem('');
      setQuantity(0);
    } else {
      alert('No hay suficientes productos en inventario');
    }
  };

  return (
    <div className="sales">
        <h2 className="inventory__title">Inventario</h2>
        <InventoryTable
        inventory={inventory}
        onEdit={() => {}}
        onDelete={() => {}}
        editable={false}
        />
      <h2 className="sales__title">Ventas</h2>
      <div className="sales__form">
        <select
          className="sales__select"
          value={selectedItem}
          onChange={(e) => setSelectedItem(e.target.value)}
        >
          <option value="">Seleccionar Producto</option>
          {inventory
            .filter(item => item.quantity > 0)
            .map(item => (
              <option key={item.id} value={item.name}>{item.name}</option>
            ))}
        </select>
        <input
          className="sales__input"
          type="number"
          placeholder="Cantidad"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
        <button className="sales__button" onClick={addSale}>Vender</button>
      </div>
      <ul className="sales__list">
        {sales.map(sale => (
          <li key={sale.id} className="sales__item">
            {sale.name} - {sale.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SalesPage;
