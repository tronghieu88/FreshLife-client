// Trong file order.js
import callApi from "./api";
// import callApi from "./api";

// const { callApi, USER_ID } = api;

async function getOrders() {
  try {
    return await callApi(`/api/orders`, "GET");
    // return await callApi(`/api/orders/${USER_ID}`, 'GET');
  } catch (error) {
    console.error("Lỗi khi lấy đơn hàng:", error);
  }
}

async function addOrder(product_id, quantity, user_id) {
  try {
    const params = {
      user_id: user_id,
      product_id: product_id,
      quantity: quantity,
    };
    console.log("api");
    console.log(params);
    return await callApi("/api/orders/add", "POST", params);
  } catch (error) {
    console.error("Lỗi khi thêm đơn hàng:", error);
  }
}

async function updateOrder(order_id, quantity) {
  try {
    const params = {
      order_id: order_id,
      quantity: quantity,
    };

    return await callApi(`/api/orders/update`, "PUT", params);
  } catch (error) {
    console.error("Lỗi khi cập nhật đơn hàng:", error);
  }
}

async function deleteOrder(order_id) {
  try {
    return await callApi(`/api/orders/delete/${order_id}`, "DELETE");
  } catch (error) {
    console.error("Lỗi khi xóa đơn hàng:", error);
  }
}

export { getOrders, addOrder, updateOrder, deleteOrder };
