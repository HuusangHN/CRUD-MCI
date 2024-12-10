import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CustomerDetail = () => {
  const { id } = useParams();
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    const fetchCustomer = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get(`/api/customers/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCustomer(response.data);
    };
    fetchCustomer();
  }, [id]);

  return (
    <div>
      <h2>Chi tiết khách hàng</h2>
      {customer ? (
        <div>
          <p><strong>Mã KH:</strong> {customer.customerId}</p>
          <p><strong>Họ và tên:</strong> {customer.name}</p>
          <p><strong>SĐT:</strong> {customer.phone}</p>
          <p><strong>Email:</strong> {customer.email}</p>
          <p><strong>Người tiếp thị:</strong> {customer.marketingRep}</p>
          <p><strong>Nguồn:</strong> {customer.source}</p>
          <p><strong>Ghi chú:</strong> {customer.notes}</p>
          <p><strong>Ngày tạo:</strong> {customer.createdAt}</p>
          {/* Thêm các thông tin khác nếu cần */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CustomerDetail;
