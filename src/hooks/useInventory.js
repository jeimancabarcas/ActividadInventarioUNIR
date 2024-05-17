import { useState, useEffect } from 'react';

const useInventory = () => {
  const [inventory, setInventory] = useState(() => {
    const savedInventory = localStorage.getItem('inventory');
    return savedInventory ? JSON.parse(savedInventory) : [];
  });

  useEffect(() => {
    localStorage.setItem('inventory', JSON.stringify(inventory));
  }, [inventory]);

  const addItem = (item) => {
    const existingItem = inventory.find(i => i.name.toLowerCase() === item.name.toLowerCase());
    if (existingItem) {
      alert('El producto ya existe en el inventario.');
    } else {
      setInventory([...inventory, item]);
    }
  };

  const deleteItem = (id) => {
    setInventory(inventory.filter(item => item.id !== id));
  };

  const editItem = (id, quantity) => {
    if (quantity <= 0) {
      alert('La cantidad debe ser mayor que cero.');
      return;
    }
    setInventory(inventory.map(item => item.id === id ? { ...item, quantity } : item));
  };

  return { inventory, addItem, deleteItem, editItem };
};

export default useInventory;
