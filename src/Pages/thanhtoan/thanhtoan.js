import React, { useState } from 'react';
import "./thanhtoan.css";
// import product from '../image/product-detail/fruits/grapes_300x300.jpg'

function Payment() {
  const [totalAmount, setTotalAmount] = useState(0);
  const [cart, setCart] = useState([]);

  const Item = ({ name, price, count, img, id }) => {
    // logic xử lý item
    return { name, price, count, img, id };
  };

  const saveCart = () => {
    // logic lưu giỏ hàng
  };

  const handlePayment = () => {
    const name = ''; // Định nghĩa giá trị cho biến name
    const price = 0; // Định nghĩa giá trị cho biến price
    const count = 0; // Định nghĩa giá trị cho biến count
    const img = ''; // Định nghĩa giá trị cho biến img
    const id = ''; // Định nghĩa giá trị cho biến id
    const item = Item({ name, price, count, img, id });
    const updatedCart = [...cart, item];
    setCart(updatedCart);
    saveCart();
  };

  return (
      <div id="page-wrapper-payment">
        <div className="columns-container-payment">
          <div className="container-payment" id="columns">
            <h2 className="page-heading-payment">
              <span className="page-heading-title-payment">Thanh toán</span>
            </h2>
            <div className="page-content page-order-payment">
              <div className="panel-group checkout-page accordion scrollable-payment" id="checkout-page-payment">
                <div id="payment-address-payment" className="panel panel-default-payment">
                  <div className="panel-heading-payment">
                    <p className="panel-title-payment">
                      <p>Bước 1: Thông tin khách hàng</p>
                    </p>
                  </div>
                  <div className="form-group-payment">
                    <label htmlFor="firstname">Họ và tên <span className="require">*</span></label>
                    <input type="text" id="firstname" className="input form-control" />
                    <label htmlFor="email">Email <span className="require">*</span></label>
                    <input type="text" id="email" className="input form-control" />
                  </div>
                  <div className="form-group-payment">
                    <label htmlFor="telephone">Số điện thoại <span className="require">*</span></label>
                    <input type="text" id="telephone" className="input form-control" />
                    <label htmlFor="diachi">Địa chỉ <span className="require">*</span></label>
                    <input type="text" id="diachi" className="input form-control" />
                  </div>
                </div>

                <div id="payment-method" className="panel panel-default-payment">
                  <div className="panel-heading-payment">
                    <p className="panel-title-payment">
                      <p>Bước 2: Phương thức thanh toán</p>
                    </p>
                  </div>
                  <div className="heading-payment">
                    <p className="title-payment">
                      <p>Chọn phương thức thanh toán</p>
                    </p>
                  </div>
                  <div className='form-payment'>
                    <label>
                      <input type="radio" name="paymentOption" value="cashOnDelivery" />
                      Thanh toán khi nhận hàng
                    </label>

                    <label>
                      <input type="radio" name="paymentOption" value="momo" />
                      Thanh toán bằng Momo
                    </label>

                    <label>
                      <input type="radio" name="paymentOption" value="creditCard" />
                      Thanh toán bằng thẻ tín dụng
                    </label>
                  </div>
                </div>

                <div id="confirm-order" className="panel panel-default-payment">
                  <div className="panel-heading-payment">
                    <p className="panel-title-payment">
                      <p>Bước 3: Xác nhận đơn hàng</p>
                    </p>
                  </div>
                  <div className="order-detail-content-payment">
                    <table className="table-payment">
                      <thead>
                        <tr>
                          <th className="cart_product">Hình ảnh</th>
                          <th>Tên sản phẩm</th>
                          <th>Tình trạng</th>
                          <th>Giá tiền</th>
                          <th>Số lượng</th>
                          <th>Tổng cộng</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.map((item, index) => (
                          <tr key={index}>
                            <td className="cart_product">
                              <a href="/#">
                                <img
                                  src={item.img}
                                  alt={item.name}
                                  className="img-responsive"
                                  width="50"
                                  height="50"
                                />
                              </a>
                            </td>
                            <td className="cart_description">
                              <h4>
                                <a href="/#">{item.name}</a>
                              </h4>
                            </td>
                            <td className="price">
                              <span>{item.price}</span>
                            </td>
                            <td className="qty">
                              <input
                                className="form-control input-sm"
                                type="text"
                                value={item.count}
                                readOnly
                              />
                            </td>
                            <td className="price">
                              <span>{item.price * item.count}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr>
                          <td colSpan="5">Tổng cộng</td>
                          <td>{totalAmount}</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  <div className="cart_navigation_payment">
                    <button
                      className="button btn btn-primary"
                      type="submit"
                      onClick={handlePayment}
                    >
                      Mua ngay
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Payment;