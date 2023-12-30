import React, { useState, useEffect } from 'react';
import Header from '../../Component/Header/Header';
import './My_order.css';
import Footer from '../../Component/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const Order = () => {
  const [account, setAccount] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseAccount = await fetch('../../Account/data/account.json');
        const dataAccount = await responseAccount.json();
        setAccount(dataAccount[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/products/ProductList/data/traicay.json');
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const filterOrders = (status) => {
    setFilter(status);
  };

  const filteredOrders = filter === 'all' ? orders : orders.filter((order) => order.status === filter);

  const handleBuyAgain = (orderId) => {
    // Logic for buying again
    console.log(`Buy again clicked for order ${orderId}`);
  };

  return (
    <div>
      <div className="order">
        <div>
          <a href="#" className="link_order">
            Đơn hàng của tôi
          </a>
        </div>
        <div className="container_order">
          <div className="left_order">
            <div>
              <img src={account.imageUrl} alt="account" className="img_account" />
              <span>{account.Account}</span>
            </div>
            <div>
              <br />
              <a href="/MyAccount" className="link_order">
                <FontAwesomeIcon icon={faUser} /> Tài khoản của tôi
              </a>
            </div>
            <div>
              <a href="/MyOrder" className="link_order">
                <FontAwesomeIcon icon={faList} /> Đơn hàng của tôi
              </a>
            </div>
            <div>
              <a href="#" className="link_order">
                <FontAwesomeIcon icon={faRightFromBracket} /> Đăng xuất
              </a>
            </div>
          </div>
          <div className="right_order">
            <div className="order-list-container">
              <div className="filter-buttons-order">
                <button onClick={() => filterOrders('all')}>Tất cả</button>
                <button onClick={() => filterOrders('Đang xử lí')}>Đang xử lí</button>
                <button onClick={() => filterOrders('Đang vận chuyển')}>Đang vận chuyển</button>
                <button onClick={() => filterOrders('Đã hủy')}>Đã hủy</button>
              </div>
              {filteredOrders.map((order) => (
                <div key={order.id} className="order-item">
                <img src={order.imageUrl} alt={order.productName} />
                <div className="order-info">
                  <div className="product-details">
                    <p className="product-name">{order.productName}</p>
                    <p className="order-status">Trạng thái: {order.status}</p>
                  </div>
                  <div className="quantity-price">
                    <p>Số lượng: {order.quantity}</p>
                    <p>Giá tiền: {order.productPrice}</p>
                  </div>
                </div>
                <div className="total-order">
                  <p>Thành tiền: {order.productPrice * order.quantity}</p>
                </div>
                <button onClick={() => handleBuyAgain(order.id)}>Mua lại</button>
              </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;