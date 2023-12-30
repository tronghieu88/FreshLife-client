import callApi from "./api";

async function apiBlog() {
  try {
    return await callApi("/api/blogs", "GET");
  } catch (error) {
    console.error("Lỗi khi register:", error);
  }
}

export { apiBlog };
