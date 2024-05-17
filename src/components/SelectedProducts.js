import React from 'react';

const SelectedProducts = ({ selectedItems, total, onQuantityChange, onRemoveItem, onAddSale }) => {
  return (
    <div>
      <h2 className="sales__title">Productos Seleccionados para la Venta</h2>
      <div className="sales__table-wrapper">
        <table className="sales__table">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio de Venta</th>
              <th>Total</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {selectedItems.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>
                  <input
                    className="sales__input"
                    type="number"
                    value={item.quantity}
                    onChange={(e) => onQuantityChange(item.id, Number(e.target.value))}
                  />
                </td>
                <td>${item.salePrice}</td>
                <td>${item.salePrice * item.quantity}</td>
                <td>
                  <button className="sales__remove-button" onClick={() => onRemoveItem(item.id)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h3>Total: ${total}</h3>
      <button className="sales__button" onClick={onAddSale}>Vender</button>
    </div>
  );
};

export default SelectedProducts;
