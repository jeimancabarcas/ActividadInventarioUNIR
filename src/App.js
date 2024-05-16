import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import InventoryPage from './pages/InventoryPage';
import SalesPage from './pages/SalesPage';
import LoginPage from './pages/LoginPage';
import './App.css';

function App() {
  const [inventory, setInventory] = useState([]);
  const [sales, setSales] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="app">
        {isAuthenticated && <Header onLogout={handleLogout} />}
        <main className="app__content">
          <Routes>
            <Route path="/login" element={<LoginPage onLogin={() => setIsAuthenticated(true)} />} />
            <Route path="/inventory" element={isAuthenticated ? <InventoryPage inventory={inventory} setInventory={setInventory} /> : <Navigate to="/login" />} />
            <Route path="/sales" element={isAuthenticated ? <SalesPage sales={sales} setSales={setSales} inventory={inventory} setInventory={setInventory} /> : <Navigate to="/login" />} />
            <Route path="/" element={<Navigate to={isAuthenticated ? "/inventory" : "/login"} />} />
          </Routes>
        </main>
        {isAuthenticated && <Footer />}
      </div>
    </Router>
  );
}

export default App;
