import callApi from "./api";

async function apiRegister(
  username,
  phone,
  email,
  password,
  address,
  gender,
  birthday
) {
  try {
    const params = {
      username: username,
      phone: phone,
      email: email,
      password: password,
      address: address,
      gender: gender,
      birthday: birthday,
    };
    return await callApi("/api/users/register", "POST", params);
  } catch (error) {
    console.error("Lỗi khi register:", error);
  }
}

async function apiLogin(phone, password) {
  try {
    const params = {
      phone: phone,
      password: password,
    };
    const login = await callApi("/api/users/login", "POST", params);
    console.log("first", login);
    return login;
  } catch (error) {
    console.error("Lỗi khi login:", error);
  }
}

async function apiGetUser() {
  try {
    return await callApi("/api/users/login", "GET");
  } catch (error) {
    console.error("Lỗi khi get user:", error);
  }
}
async function apiUser() {
  try {
    return await callApi("/api/users", "GET");
  } catch (error) {
    console.error("Lỗi khi register:", error);
  }
}

export { apiRegister, apiLogin, apiGetUser, apiUser };
