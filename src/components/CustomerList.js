import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('/api/customers', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCustomers(response.data);
    };
    fetchCustomers();
  }, []);

  return (
    <div>
      <h2>Danh sách khách hàng</h2>
      <Link to="/customers/new">Thêm khách hàng mới</Link>
      <table>
        <thead>
          <tr>
            <th>Mã KH</th>
            <th>Họ và tên</th>
            <th>SĐT</th>
            <th>Email</th>
            <th>Người tiếp thị</th>
            <th>Nguồn</th>
            <th>Ghi chú</th>
            <th>Ngày tạo</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer._id}>
              <td>{customer.customerId}</td>
              <td>{customer.name}</td>
              <td>{customer.phone}</td>
              <td>{customer.email}</td>
              <td>{customer.marketingRep}</td>
              <td>{customer.source}</td>
              <td>{customer.notes}</td>
              <td>{customer.createdAt}</td>
              <td>
                <Link to={`/customers/edit/${customer._id}`}>Sửa</Link>
                <Link to={`/customers/${customer._id}`}>Chi tiết</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;
