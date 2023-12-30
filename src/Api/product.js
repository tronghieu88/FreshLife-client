import callApi from "./api";

async function apiProduct() {
  try {
    return await callApi("/api/products", "GET");
  } catch (error) {
    console.error("Lỗi khi register:", error);
  }
}



export { apiProduct};
