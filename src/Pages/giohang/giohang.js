import React, { useState, useEffect } from 'react';
import './giohang.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const Cart = () => {
    const [cart, setCart] = useState([]);
  
    useEffect(() => {
      loadCart();
    }, []);
  
    const Item = ({ name, price, count, img, id }) => {
      return {
        name,
        price,
        count,
        img,
        id,
      };
    };

    const adjustItemCount = (id, count) => {
      const updatedCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, count: item.count + count };
        }
        return item;
      });
    
      setCart(updatedCart);
      saveCart();
    };
  
    const saveCart = () => {
      localStorage.setItem('shoppingCart', JSON.stringify(cart));
    };
  
    const loadCart = () => {
      const savedCart = JSON.parse(localStorage.getItem('shoppingCart'));
      setCart(savedCart || []);
    };
  
    const addItemToCart = (name, price, count, img, id) => {
      for (let i in cart) {
        if (cart[i].id === id) {
          cart[i].count += count;
          saveCart();
          return;
        }
      }
      
      

      const item = Item({ name, price, count, img, id });
      const updatedCart = [...cart, item];
      setCart(updatedCart);
      saveCart();
    };
  
    const setCountForItem = (id, count) => {
      const updatedCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, count };
        }
        return item;
      });
      setCart(updatedCart);
      saveCart();
    };
  
    const removeItemFromCart = (id) => {
      const updatedCart = cart
        .map((item) => {
          if (item.id === id) {
            return { ...item, count: item.count - 1 };
          }
          return item;
        })
        .filter((item) => item.count !== 0);
  
      setCart(updatedCart);
      saveCart();
    };
  
    const removeItemFromCartAll = (id) => {
      const updatedCart = cart.filter((item) => item.id !== id);
      setCart(updatedCart);
      saveCart();
    };
  
    const clearCart = () => {
      setCart([]);
      saveCart();
    };
  
    const countCart = () => {
      let totalCount = 0;
      for (let i in cart) {
        totalCount += cart[i].count;
      }
      return totalCount;
    };
  
    const totalCart = () => {
      let totalCost = 0;
      for (let i in cart) {
        totalCost += cart[i].price * cart[i].count;
      }
      return totalCost.toFixed(0);
    };
  
    const listCart = () => {
      const cartCopy = [];
      for (let i in cart) {
        const item = cart[i];
        const itemCopy = { ...item };
        itemCopy.total = (item.price * item.count).toFixed(0);
        cartCopy.push(itemCopy);
      }
      return cartCopy;
    };

  return (
    <div>
     
      <div className="columns-container-shopping-card">
        <div className="container" id="columns">
          <h2 className="page-heading-shopping-card">
            <span className="page-heading-title-shopping-card">Giỏ hàng</span>
          </h2>
          <div className="page-content-shopping-card">
            <div className="heading-counter-shopping-card">
              <span className="fa fa-shopping-cart"></span> Số sản phẩm trong giỏ hàng của bạn là: 
              <span id="count-cart" style={{ fontWeight: 'bold' }}>
                {countCart()}
              </span>{' '}
              <span> sản phẩm</span>
            </div>
            <div className="order-detail-content-shopping-card">
              <table className="table-shopping-card">
                <thead>
                  <tr>
                    <th className="cart_product-shopping-cart">Hình ảnh</th>
                    <th>Tên sản phẩm</th>
                    <th>Tình trạng</th>
                    <th>Giá tiền</th>
                    <th>Số lượng</th>
                    <th>Tổng </th>
                    <th className="action-shopping-cart">
                        <FontAwesomeIcon icon={faTrash} />
                    </th>
                  </tr>
                </thead>
                <tbody id="show-item-cart">
                  {listCart().map((item) => (
                    <tr key={item.id}>
                      <td className="cart_product-shopping-cart">
                        <a href="#">
                          <img src={item.img} alt="Product" />
                       </a>
                      </td>
                      <td className="cart_description-shopping-cart">
                        <p className="product-name">{item.name}</p>
                      </td>
                      <td className="cart_avail-shopping-cart">
                        <span className="label label-success">In stock</span>
                      </td>
                      <td className="price-shopping-cart">
                        ${item.price.toFixed(2)}
                      </td>
                      <td className="qty-shopping-cart">
                        <div className="quantity-control">
                            <button
                            className="quantity-control-button"
                            onClick={() => adjustItemCount(item.id, -1)}
                            >
                            -
                            </button>
                            <span className="quantity">{item.count}</span>
                            <button
                            className="quantity-control-button"
                            onClick={() => adjustItemCount(item.id, 1)}
                            >
                            +
                            </button>
                        </div>
                    </td>
                      <td className="price-shopping-cart">
                        ${item.total}
                      </td>
                      <td className="action-shopping-cart">
                        <button
                            className="btn btn-danger btn-xs-shopping-cart"
                            onClick={() => removeItemFromCart(item.id)}
                        >
                            Xóa
                        </button>
                    </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="2" rowspan="1"></td>
                    <td colSpan="3">
                      <strong>Tổng cộng</strong>
                    </td>
                    <td colSpan="1" id="total_price" style={{ fontWeight: 'bold', color: '#e84d1c', fontSize: '20px' }}>
                      {totalCart()}
                    </td>
                    <td></td>
                  </tr>
                </tfoot>
              </table>
              <div className="cart_navigation-shopping-card">
              <a className="button-shopping-card" href="/Payment">
                  Mua ngay
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart