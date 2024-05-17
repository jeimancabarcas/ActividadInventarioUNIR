import React from 'react';
import '../styles/InventoryTable.css';

const InventoryTable = ({ inventory, onEdit, onDelete, editable }) => {
  return (
    <div className="inventory-table">
      <table className="inventory__table">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio de Compra</th>
            <th>Precio de Venta</th>
            {editable && <th>Acciones</th>}
          </tr>
        </thead>
        <tbody>
          {inventory.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>${item.purchasePrice}</td>
              <td>${item.salePrice}</td>
              {editable && (
                <td>
                  <button className="inventory__edit-button" onClick={() => onEdit(item.id, item.quantity + 1)}>Incrementar</button>
                  <button className="inventory__edit-button" onClick={() => onEdit(item.id, item.quantity - 1)}>Decrementar</button>
                  <button className="inventory__delete-button" onClick={() => onDelete(item.id)}>Eliminar</button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTable;
