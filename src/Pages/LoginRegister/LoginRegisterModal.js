import React, { useState } from "react";
import "./LoginRegisterModal.css";
import { BsCheckLg, BsEye, BsEyeSlash } from "react-icons/bs";
import { apiLogin, apiRegister } from "../../Api/user";
// import FacebookLogin from 'react-facebook-login';
// import { GoogleLogin } from 'react-google-login';
// import bị lỗi :<<
const PasswordInput = ({ label, name }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="form-groups_log_res">
      <label htmlFor={name}>{label}: </label>
      <div className="password-input-containers_log_res">
        <input
          type={showPassword ? "text" : "password"}
          id={name}
          name={name}
          minLength="8"
          required
        />
        <i className="eye-icon" onClick={toggleShowPassword}>
          {showPassword ? <BsEye /> : <BsEyeSlash />}
        </i>
      </div>
      <span className="required-field">*</span>
    </div>
  );
};

const PasswordConfirmationInput = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="form-groups_log_res">
      <label htmlFor="confirmPassword">Nhập lại mật khẩu: </label>
      <div className="password-input-containers_log_res">
        <input
          type={showPassword ? "text" : "password"}
          id="confirmPassword"
          name="confirmPassword"
          required
        />
        <i className="eye-icon" onClick={toggleShowPassword}>
          {showPassword ? <BsEye /> : <BsEyeSlash />}
        </i>
      </div>
      <span className="required-field">*</span>
    </div>
  );
};

const LoginRegisterModal = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [loginError, setLoginError] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const showTab = (tab) => {
    setActiveTab(tab);
    setLoginError("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const phoneNumber = e.target.elements.phone.value;
    const password = e.target.elements.password.value;

    try {
      const response = await apiLogin(phoneNumber, password);
      if (response) {
        console.log(response);
        window.localStorage.setItem("user_id", response.userLogin._id);
        // const test = window.localStorage.getItem("user_id");
        // console.log(test);
      }
    } catch (error) {
      console.log("ERROR", error);
    }

    // if (email === 'test@gmail.com' && password === 'Test123!') {

    // } else {
    //   setLoginError('Mật khẩu hoặc tài khoản không đúng, cần nhập lại.');
    // }
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    const fullName = e.target.elements.fullName.value;
    const phoneNumber = e.target.elements.phoneNumber.value;
    const password = e.target.elements.password.value;
    const confirmPassword = e.target.elements.confirmPassword.value;
    const dob = e.target.elements.dob.value;
    const gender = e.target.elements.gender.value;
    const address = e.target.elements.address.value;
    const email = e.target.elements.email.value;
    const isEmailValid =
      email === "" || /^[a-zA-Z0-9._-]+@gmail.com$/.test(email);
    if (!isEmailValid) {
      alert(
        "Email không hợp lệ. Email phải là địa chỉ Gmail và không chứa ký tự đặc biệt"
      );
      return;
    }
    const isValidRegistration = validateRegistration(
      fullName,
      email,
      phoneNumber,
      password,
      confirmPassword,
      dob,
      gender
    );

    if (isValidRegistration) {
      const response = await apiRegister(
        fullName,
        phoneNumber,
        email,
        password,
        address,
        gender,
        dob
      );
      console.log(response);
    }
  };

  const validateRegistration = (
    fullName,
    email,
    phoneNumber,
    password,
    confirmPassword,
    dob,
    gender
  ) => {
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const isPasswordValid =
      password &&
      confirmPassword &&
      password === confirmPassword &&
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /\d/.test(password) &&
      specialCharRegex.test(password);

    const isPhoneNumberValid = !phoneNumber || /^0\d{9,10}$/.test(phoneNumber);

    if (!isPasswordValid) {
      alert(
        "Mật khẩu cần có ít nhất 8 ký tự, ít nhất một chữ cái in hoa, 1 chữ số và 1 ký tự đặc biệt"
      );
    } else if (confirmPassword !== password) {
      alert("Mật khẩu không trùng khớp, mời nhập lại");
    } else if (!isPhoneNumberValid) {
      alert("Số điện thoại không đúng, cần nhập lại");
    }

    return fullName && isPasswordValid && dob && gender && isPhoneNumberValid;
  };

  const componentClicked = () => {
    console.log("clicked");
  };

  const responseFacebook = (response) => {
    console.log(response);
    // Xử lý phản hồi từ Facebook Login
  };

  const responseGoogle = (response) => {
    console.log(response);
    // Xử lý phản hồi từ Google Login
  };

  return (
    <div className="login-register-modal">
      <div className="title_log_res">Đăng nhập/Đăng ký</div>
      <hr />
      <div className="nav-tabs_log_res">
        <div
          className={`tab_log_res ${activeTab === "login" ? "active" : ""}`}
          onClick={() => showTab("login")}
          style={{
            backgroundColor: activeTab === "login" ? "#37A747" : "",
            color: activeTab === "login" ? "#F3FCF2" : "",
          }}
        >
          Đăng nhập
        </div>
        <div
          className={`tab_log_res ${activeTab === "register" ? "active" : ""}`}
          onClick={() => showTab("register")}
          style={{
            backgroundColor: activeTab === "register" ? "#37A747" : "",
            color: activeTab === "register" ? "#F3FCF2" : "",
          }}
        >
          Đăng ký
        </div>
      </div>

      <div className="tab-contents_log_res">
        <div
          className={`tab-panes_log_res ${
            activeTab === "login" ? "active" : ""
          }`}
        >
          <form onSubmit={handleLogin}>
            <div className="form-groups_log_res">
              <label>Số điện thoại: </label>
              <input
                type="phone"
                name="phone"
                placeholder="Số điện thoại...."
                required
              />
            </div>
            <PasswordInput label="Mật khẩu" name="password" />
            <button type="submit" className="buttons_log_res">
              Đăng nhập
            </button>
            {loginError && <p style={{ color: "red" }}>{loginError}</p>}
          </form>
          <hr />
          <div className="center_login_gg">
            <h4>Hoặc đăng nhập bằng</h4>
            {/* <FacebookLogin
              appId="1206715649505081"
              fields="name,email,picture"
              onClick={componentClicked}
              callback={responseFacebook}
              icon="fa-facebook"
            />
            <GoogleLogin
              clientId="85a03867-dccf-4882-adde-1a79aeec50df.apps.googleusercontent.com"
              buttonText="Login with Google"
              isSignedIn={true}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            /> */}
            {/* chỗ nãy gọi đăng nhập bằng Google npm install react-google-login, bị lỗi */}
          </div>
        </div>

        <div
          className={`tab-panes_log_res ${
            activeTab === "register" ? "active" : ""
          }`}
        >
          {!registrationSuccess ? (
            <form onSubmit={handleRegistration}>
              <div className="form-groups_log_res">
                <label htmlFor="fullName">Họ và Tên: </label>
                <input type="text" id="fullName" name="fullName" required />
                <span className="required-field">*</span>
              </div>

              <div className="form-groups_log_res">
                <label htmlFor="phoneNumber">Số điện thoại: </label>
                <input type="tel" id="phoneNumber" name="phoneNumber" />
                <span className="required-field">*</span>
              </div>

              <PasswordInput label="Mật khẩu" name="password" />
              <PasswordConfirmationInput />
              <div className="form-groups_log_res">
                <label htmlFor="dob">Ngày sinh: </label>
                <input type="date" id="dob" name="dob" required />
                <span className="required-field">*</span>
              </div>

              <div className="form-groups_log_res">
                <label htmlFor="gender">Giới tính: </label>
                <select id="gender" name="gender" required>
                  <option value="">Chọn giới tính: </option>
                  <option value="male">Nam</option>
                  <option value="female">Nữ</option>
                  <option value="other">Khác</option>
                </select>
                <span className="required-field">*</span>
              </div>

              <div className="form-groups_log_res">
                <label htmlFor="address">Địa chỉ: </label>
                <input type="text" id="address" name="address" />
                <span className="required-field">*</span>
              </div>

              <div className="form-groups_log_res">
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" name="email" />
              </div>

              <button type="submit" className="buttons_log_res">
                Đăng ký
              </button>
            </form>
          ) : (
            <div className="registration-successs_log_res">
              <p>Đăng ký thành công!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterModal;
