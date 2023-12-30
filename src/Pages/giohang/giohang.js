import React, { useState, useEffect } from "react";
import "./giohang.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { getOrders, updateOrder, deleteOrder } from "../../Api/order";
const Cart = () => {
  const [cart, setCart] = useState();

  useEffect(() => {
    // fetchData();
    //Load cart
    loadCart();
    // totalPriceProduct();
  }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch('/products/ProductList/data/traicay.json');
  //     const data = await response.json();
  //     setCart(data.map((item) => ({ ...item, quantity: 0, total: 0, selected: false })));
  //   } catch (error) {
  //     console.log('Error fetching data:', error);
  //   }
  // };

  const loadCart = async () => {
    // console.log("ok");
    // Load user_id from localStorage
    // lay user tu localStorage
    const user = window.localStorage.getItem("user_id");
    // console.log(user);

    // call api getOrders
    const cartItems = await getOrders(user);
    console.log(cartItems);
    // const savedCart = JSON.parse(localStorage.getItem('shoppingCart'));
    // set cart
    setCart(
      cartItems.orders.map((item) => ({
        ...item,
        // quantity: 0,
        total: item.product_id.price * item.quantity,
      }))
    );
  };

  const adjustItemCount = async (id, count) => {
    // const updatedCart = cart?.map((item) => {
    //   if (item.id === id) {
    //     const newCount = Math.max(item.quantity + count, 0);
    //     const newTotal = item.productPrice * newCount;
    //     return { ...item, quantity: newCount, total: newTotal };
    //   }
    //   return item;
    // });
    // setCart(updatedCart);
    console.log(id, count);
    const updatedCart = await updateOrder(id, count);
    setCart(
      updatedCart.orders.map((item) => ({
        ...item,
        // quantity: 0,
        total: item.product_id.price * item.quantity,
      }))
    );
  };
  // const totalPriceProduct = async () => {
  //   const respone = cart.orders;
  //   console.log("first");
  //   console.log(cart);
  // };
  const removeItemFromCart = async (id) => {
    // const updatedCart = cart?.filter((item) => item.id !== id);
    // call api
    const updatedCart = await deleteOrder(id);
    // setCart(updatedCart);
    setCart(
      updatedCart.orders.map((item) => ({
        ...item,
        // quantity: 0,
        total: item.product_id.price * item.quantity,
      }))
    );
  };

  // const toggleProductSelection = (id) => {
  //   const updatedCart = cart?.map((item) => {
  //     if (item.id === id) {
  //       return { ...item, selected: !item.selected };
  //     }
  //     return item;
  //   });

  //   setCart(updatedCart);
  // };

  const countCart = () => {
    let totalCount = 0;
    for (let i in cart) {
      if (typeof cart[i].quantity === "number" && !isNaN(cart[i].quantity)) {
        totalCount += cart[i].quantity;
      }
    }
    return totalCount;
  };

  // const totalCart = () => {
  //   let totalCost = 0;
  //   for (let i in cart) {
  //     if (
  //       typeof cart[i].productPrice === "number" &&
  //       typeof cart[i].quantity === "number" &&
  //       !isNaN(cart[i].productPrice) &&
  //       !isNaN(cart[i].quantity)
  //     ) {
  //       totalCost += cart[i].productPrice * cart[i].quantity;
  //     }
  //   }
  //   return totalCost.toFixed(2);
  // };

  const totalCart = () => {
    const cartItem = cart;
    var allTotal = 0;
    cartItem?.map((item) => (allTotal += item.total));
    console.log(allTotal);
    return allTotal;
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
              <span className="fa fa-shopping-cart"></span> Số sản phẩm trong
              giỏ hàng của bạn là:{" "}
              <span id="count-cart" style={{ fontWeight: "bold" }}>
                {countCart()}
              </span>{" "}
              <span> sản phẩm</span>
            </div>
            <div className="order-detail-content-shopping-card">
              <table className="table-shopping-card">
                <thead>
                  <tr>
                    <th className="cart_product-shopping-cart">Hình ảnh</th>
                    <th>Tên sản phẩm</th>
                    <th>Giá tiền</th>
                    <th>Tình trạng</th>
                    <th>Số lượng</th>
                    <th>Tổng </th>
                    <th>Xóa</th>
                    {/* <th>Chọn sản phẩm</th> */}
                  </tr>
                </thead>
                <tbody id="show-item-cart">
                  {cart?.map((item) => (
                    <tr key={item.id}>
                      <td className="cart_product-shopping-cart">
                        <a href="#">
                          <img src={item.product_id.image_1} alt="Product" />
                        </a>
                      </td>
                      <td className="cart_description-shopping-cart">
                        <p className="product-name">{item.product_id.name}</p>
                      </td>
                      <td className="price-shopping-cart">
                        $
                        {item.product_id.price
                          ? item.product_id.price.toFixed(2)
                          : ""}
                      </td>
                      <td className="tt">
                        <p className="ttt">Còn hàng</p>
                      </td>
                      <td className="qty-shopping-cart">
                        <div className="quantity-control">
                          <button
                            className="quantity-control-button"
                            onClick={() => adjustItemCount(item._id, -1)}
                          >
                            -
                          </button>
                          <span className="quantity">{item.quantity || 0}</span>
                          <button
                            className="quantity-control-button"
                            onClick={() => adjustItemCount(item._id, 1)}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="total-shopping-cart">
                        ${item.total ? item.total.toFixed(2) : ""}
                      </td>
                      <td className="remove-from-cart-shopping-cart">
                        <button
                          className="remove-from-cart-button"
                          onClick={() => removeItemFromCart(item._id)}
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </td>
                      {/* <td className="select-product-shopping-cart">
                        <input
                          type="checkbox"
                          checked={item.selected}
                          onChange={() => toggleProductSelection(item.id)}
                        />
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="cart-total-shopping-cart">
                <span className="cart-total-label">Tổng tiền:</span>
                <span className="cart-total-value">${totalCart()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
