import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomerList from './components/CustomerList';
import CustomerForm from './components/CustomerForm';
import CustomerDetail from './components/CustomerDetail';

const App = () => (
  <Router>
    <div className="container">
      <h1>Quản lý khách hàng</h1>
      <Routes>
        <Route path="/customers" element={<CustomerList />} />
        <Route path="/customers/new" element={<CustomerForm />} />
        <Route path="/customers/edit/:id" element={<CustomerForm />} />
        <Route path="/customers/:id" element={<CustomerDetail />} />
      </Routes>
    </div>
  </Router>
);

export default App;