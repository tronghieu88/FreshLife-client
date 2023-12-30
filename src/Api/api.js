const API_URL = "http://localhost:5000";

// async function callApi(url = "", method, data = {}) {
//   const response = await fetch(`${API_URL}${url}`, {
//     method: method, // *GET, POST, PUT, DELETE, etc.
//     headers: {
//       Authorization: 'Bearer {token}',
//       "Content-Type": "application/json",
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     body: JSON.stringify(data), // body data type must match "Content-Type" header
//   });
//   return response.json(); // parses JSON response into native JavaScript objects
// }

async function callApi(url = "", method, data = {}, token) {
  // Chỉ thêm body nếu phương thức không phải là GET
  const requestOptions = {
    method: method,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  // Chỉ thêm body nếu phương thức không phải là GET
  if (method !== "GET") {
    requestOptions.body = JSON.stringify(data);
  }

  const response = await fetch(`${API_URL}${url}`, requestOptions);

  // if (!response.ok) {
  //   throw new Error(`Lỗi HTTP! Trạng thái: ${response.status}`);
  // }
  if (!response.ok) {
    // In ra lỗi chi tiết từ server
    console.error(`Lỗi HTTP! Trạng thái: ${response.status}`, await response.text());
    throw new Error(`Lỗi HTTP! Trạng thái: ${response.status}`);
  }


  return response.json();
}

export default callApi;
