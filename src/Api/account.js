import callApi from "./api";

async function apiUser() {
  try {
    return await callApi("/api/users", "GET");
  } catch (error) {
    console.error("Lỗi khi register:", error);
  }
}

export { apiUser };
