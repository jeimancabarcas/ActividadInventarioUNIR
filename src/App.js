import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import InventoryPage from './pages/InventoryPage';
import SalesPage from './pages/SalesPage';
import LoginPage from './pages/LoginPage';
import './App.css';
import UserProfilePage from './pages/UserProfilePage';

function App() {
  const [inventory, setInventory] = useState([]);
  const [sales, setSales] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('user'));

  useEffect(() => {
    const storedInventory = JSON.parse(localStorage.getItem('inventory')) || [];
    setInventory(storedInventory);
    const storedSales = JSON.parse(localStorage.getItem('sales')) || [];
    setSales(storedSales);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
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
            <Route path="/sales" element={isAuthenticated ? <SalesPage sales={sales} setSales={setSales} /> : <Navigate to="/login" />} />
            <Route path="/profile" element={isAuthenticated ? <UserProfilePage /> : <Navigate to="/login" />} />
            <Route path="/" element={<Navigate to={isAuthenticated ? "/inventory" : "/login"} />} />
          </Routes>
        </main>
        {isAuthenticated && <Footer />}
      </div>
    </Router>
  );
}

export default App;
