import React, { useState, useEffect } from "react";
import "./Account.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faList,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { apiUser } from "../../Api/user";

const Account = () => {
  const handleLogout = async (e) => {
    e.preventDefault();
    console.log("Logout success");
    window.localStorage.clear();
  };

  const [account, setAccount] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await apiUser();
        const latestUser = userData.users[userData.users.length - 1]; // Lấy phần tử cuối cùng
        setAccount(latestUser);
        console.log("Latest User:", latestUser);
        // const userData = await apiUser();
        // setAccount(userData.users[0]);
        // console.log('userData:', userData.users[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="account">
        <div className="path-account">
          <a href={"/"}>Trang chủ {">"} </a>
          <span>Tài khoản của tôi</span>
        </div>
        <div className="container_account">
          <div className="left_account">
            <div>
              <span>{account.username}</span>
            </div>
            <div>
              <br />
              <a href="/MyAccount" className="link_account">
                <FontAwesomeIcon icon={faUser} /> Tài khoản của tôi
              </a>
            </div>
            <div>
              <a href="/MyOrder" className="link_account">
                <FontAwesomeIcon icon={faList} /> Đơn hàng của tôi
              </a>
            </div>
            <div>
              <a href="#" className="link_account" onClick={handleLogout}>
                <FontAwesomeIcon icon={faRightFromBracket} /> Đăng xuất
              </a>
            </div>
          </div>
          <div className="center_account">
            <h4>Tài khoản của tôi</h4>
            <div>
              <label className="label_account">Tài khoản</label>
              <input
                value={account.username}
                readOnly
                className="input_account"
              />
            </div>
            <div>
              <label className="label_account">Họ và tên</label>
              <input
                value={account.username}
                readOnly
                className="input_account"
              />
            </div>
            <div>
              <label className="label_account">Email</label>
              <input value={account.email} readOnly className="input_account" />
            </div>
            <div>
              <label className="label_account">Số điện thoại</label>
              <input value={account.phone} readOnly className="input_account" />
            </div>
            <div>
              <label className="label_account">Giới tính</label>
              <input
                type="radio"
                name="gender"
                readOnly
                checked={account.gender === "Nam" || account.gender === "male"}
              />{" "}
              Nam
              <input
                type="radio"
                name="gender"
                readOnly
                checked={account.gender === "Nữ" || account.gender === "female"}
              />{" "}
              Nữ
            </div>
            <div>
              <label className="label_account">Ngày sinh</label>
              <input
                type="date"
                value={account.birthday}
                readOnly
                className="input_account"
              />
            </div>
            <div>
              <label className="label_account">Địa chỉ</label>
              <input
                value={account.address}
                readOnly
                className="input_account"
              />
            </div>
          </div>
          <div className="right_account">
            <p>
              <div className="img_account">
                {/* <img src={account.imageUrl} alt="account" className='img_account' /> */}
              </div>
            </p>
            <button className="button_account"> Chọn ảnh </button>
            <p>
              {" "}
              Dung lượng file tối đa 1MB.
              <br />
              Định dạng: .JPEG, .PNG
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
