import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const CustomerForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [customer, setCustomer] = useState({
    customerId: '',
    name: '',
    phone: '',
    email: '',
    marketingRep: '',
    source: '',
    notes: '',
    createdAt: ''
  });

  useEffect(() => {
    if (id) {
      const fetchCustomer = async () => {
        const token = localStorage.getItem('token');
        const response = await axios.get(`/api/customers/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCustomer(response.data);
      };
      fetchCustomer();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prevCustomer) => ({
      ...prevCustomer, [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (id) {
      await axios.put(`/api/customers/${id}`, customer, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } else {
      await axios.post('/api/customers', customer, {
        headers: { Authorization: `Bearer ${token}` },
      });
    }
    navigate('/customers');
  };

  return (
    <div>
      <h2>{id ? 'Sửa khách hàng' : 'Thêm khách hàng mới'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="customerId"
          placeholder="Mã KH"
          value={customer.customerId}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Họ và tên"
          value={customer.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="SĐT"
          value={customer.phone}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={customer.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="marketingRep"
          placeholder="Người tiếp thị"
          value={customer.marketingRep}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="source"
          placeholder="Nguồn"
          value={customer.source}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="notes"
          placeholder="Ghi chú"
          value={customer.notes}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="createdAt"
          placeholder="Ngày tạo"
          value={customer.createdAt}
          onChange={handleChange}
          required
        />
        <button type="submit">{id ? 'Cập nhật' : 'Tạo mới'}</button>
      </form>
    </div>
  );
};

export default CustomerForm;
