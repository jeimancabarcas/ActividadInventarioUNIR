import React from 'react';

const Inventory = ({ inventory, onSelectItem }) => {
  return (
    <div>
      <h2 className="inventory__title">Inventario</h2>
      <div className="inventory__table-wrapper">
        <table className="inventory__table">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad Disponible</th>
              <th>Precio de Venta</th>
              <th>Seleccionar</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>${item.salePrice}</td>
                <td>
                  <button className="sales__select-button" onClick={() => onSelectItem(item)}>
                    Seleccionar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inventory;
