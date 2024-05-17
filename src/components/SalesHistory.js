import React, { useEffect } from 'react';
import '../styles/SalesHistory.css';

const SalesHistory = ({ sales }) => {
  useEffect(() => {
    localStorage.setItem('sales', JSON.stringify(sales));
  }, [sales]);

  return (
    <div className="sales-history">
      <h2>Histórico de Ventas</h2>
      {sales.length === 0 ? (
        <p>No hay ventas registradas.</p>
      ) : (
        <table className="sales-history__table">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Usuario</th>
              <th>Productos</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {sales.slice().reverse().map(sale => ( // slice().reverse() para no mutar el array original
              <tr key={sale.id}>
                <td>{sale.date}</td>
                <td>{sale.user}</td>
                <td>
                  {sale.items.map(item => (
                    <div key={item.id}>
                      {item.quantity} unidades de {item.name} por ${item.salePrice} cada una = ${item.salePrice * item.quantity}
                    </div>
                  ))}
                </td>
                <td>${sale.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default SalesHistory;
