import React from 'react';
import '../styles/InventoryTable.css';

const InventoryTable = ({ inventory, onEdit, onDelete, editable }) => {
  const [editMode, setEditMode] = React.useState(null);
  const [editQuantity, setEditQuantity] = React.useState(0);

  const startEditing = (id, quantity) => {
    setEditMode(id);
    setEditQuantity(quantity);
  };

  const saveEdit = (id) => {
    onEdit(id, editQuantity);
    setEditMode(null);
    setEditQuantity(0);
  };

  return (
    <table className="inventory__table">
      <thead>
        <tr>
          <th>Producto</th>
          <th>Cantidad</th>
          {editable && <th>Acciones</th>}
        </tr>
      </thead>
      <tbody>
        {inventory.map(item => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>
              {editMode === item.id ? (
                <input
                  className="inventory__edit-input"
                  type="number"
                  value={editQuantity}
                  onChange={(e) => setEditQuantity(Number(e.target.value))}
                />
              ) : (
                item.quantity
              )}
            </td>
            {editable && (
              <td>
                {editMode === item.id ? (
                  <button className="inventory__save-button" onClick={() => saveEdit(item.id)}>Guardar</button>
                ) : (
                  <>
                    <button className="inventory__edit-button" onClick={() => startEditing(item.id, item.quantity)}>Editar</button>
                    <button className="inventory__delete-button" onClick={() => onDelete(item.id)}>Eliminar</button>
                  </>
                )}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default InventoryTable;
