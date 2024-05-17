import React, { useState, useEffect } from 'react';
import '../styles/SalesPage.css';
import Inventory from '../components/Inventory';
import SelectedProducts from '../components/SelectedProducts';
import SalesHistory from '../components/SalesHistory';

const SalesPage = ({ sales, setSales }) => {
  const [inventory, setInventory] = useState(() => {
    const savedInventory = localStorage.getItem('inventory');
    return savedInventory ? JSON.parse(savedInventory) : [];
  });
  const [selectedItems, setSelectedItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    localStorage.setItem('inventory', JSON.stringify(inventory));
  }, [inventory]);

  useEffect(() => {
    localStorage.setItem('sales', JSON.stringify(sales));
  }, [sales]);

  const addSale = () => {
    if (selectedItems.length === 0) {
      alert('Debe seleccionar al menos un producto.');
      return;
    }

    const saleDetails = selectedItems.map(item => {
      const inventoryItem = inventory.find(invItem => invItem.id === item.id);
      if (inventoryItem && inventoryItem.quantity >= item.quantity) {
        return { ...inventoryItem, quantity: item.quantity };
      } else {
        alert('No hay suficientes productos en inventario');
        return null;
      }
    }).filter(item => item !== null);

    if (saleDetails.length !== selectedItems.length) {
      return;
    }

    const currentUser = JSON.parse(localStorage.getItem('user'));
    const newSale = {
      id: Date.now(),
      date: new Date().toLocaleString(),
      user: currentUser ? currentUser.name : 'Unknown', // Aquí se obtiene el nombre completo del usuario
      items: saleDetails,
      total: saleDetails.reduce((sum, item) => sum + (item.salePrice * item.quantity), 0)
    };

    setSales([...sales, newSale]);

    const updatedInventory = inventory.map(invItem => {
      const saleItem = selectedItems.find(selItem => selItem.id === invItem.id);
      if (saleItem) {
        return { ...invItem, quantity: invItem.quantity - saleItem.quantity };
      }
      return invItem;
    });

    setInventory(updatedInventory);
    setSelectedItems([]);
    setTotal(0);
  };

  const handleQuantityChange = (id, quantity) => {
    const updatedItems = selectedItems.map(item => item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item);
    setSelectedItems(updatedItems);
    const newTotal = updatedItems.reduce((sum, item) => sum + (item.salePrice * item.quantity), 0);
    setTotal(newTotal);
  };

  const handleSelectItem = (item) => {
    const existingItem = selectedItems.find(selItem => selItem.id === item.id);
    if (existingItem) {
      alert('El producto ya está seleccionado.');
    } else {
      setSelectedItems([...selectedItems, { ...item, quantity: 1 }]);
      setTotal(total + item.salePrice);
    }
  };

  const handleRemoveItem = (id) => {
    const itemToRemove = selectedItems.find(item => item.id === id);
    if (itemToRemove) {
      setTotal(total - (itemToRemove.salePrice * itemToRemove.quantity));
      setSelectedItems(selectedItems.filter(item => item.id !== id));
    }
  };

  return (
    <div className="sales">
      <Inventory inventory={inventory} onSelectItem={handleSelectItem} />
      <SelectedProducts
        selectedItems={selectedItems}
        total={total}
        onQuantityChange={handleQuantityChange}
        onRemoveItem={handleRemoveItem}
        onAddSale={addSale}
      />
      <SalesHistory sales={sales} />
    </div>
  );
}

export default SalesPage;
