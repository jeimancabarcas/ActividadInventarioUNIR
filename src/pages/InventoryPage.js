import React from 'react';
import '../styles/InventoryPage.css';
import InventoryForm from '../components/InventoryForm';
import InventoryTable from '../components/InventoryTable';
import useInventory from '../hooks/useInventory';

const InventoryPage = () => {
  const { inventory, addItem, deleteItem, editItem } = useInventory();

  return (
    <div className="inventory">
      <h2 className="inventory__title">Inventario</h2>
      <InventoryTable
        inventory={inventory}
        onEdit={editItem}
        onDelete={deleteItem}
        editable={true}
      />
      <InventoryForm onAdd={addItem} />
    </div>
  );
}

export default InventoryPage;
