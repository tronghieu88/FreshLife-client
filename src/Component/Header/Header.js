import React, { useState, useEffect } from 'react';
import './Header.css';

function Header() {
  const [cartItems, setCartItems] = useState(0);
  const [searchInput, setSearchInput] = useState('');

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchInput(inputValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (/\d/.test(searchInput)) {
      alert('Vui lòng chỉ nhập chữ, không nhập số!');
      setSearchInput('');
    } else {
      console.log('Giá trị tìm kiếm:', searchInput);
    }
  };

  return (
    <>
      <img src="/Header/img/hinhtrenheader.png" className="top-image-header" alt="Header Image" />
      <div className="container-header">
        <div className="row-header">
          <a href="/" className="logo">
            <img alt="Freshlife" src="/logo.png" width="120px" />
          </a>

          <div className="header-search-box">
            <form className="form-inline-header" onSubmit={handleSubmit}>
              <div className="form-group-header">
                <input
                  className="input-header"
                  type="text"
                  placeholder="Search..."
                  value={searchInput}
                  onChange={handleInputChange}
                />
              </div>
              <button type="submit" className="btn-search-header">
                <i className="fa fa-search"></i>
              </button>
            </form>
          </div>

          <div className="group-button-header">
            <div className="icon-container">
              <a
                title="SignIn"
                href={"/MyAccount"}
                data-toggle="modal"
                data-target="#myModal"
                className="btn-cart-header"
              ><img alt="Freshlife" src="/Header/img/user.png" /></a>
              <a href={"/LoginRegister"} className="button-text-header">Đăng nhập/Đăng ký</a>
            </div>


            <a title="My cart" href={"/Cart"} className="btn-cart-header">
              <div className="icon-container">
                <img alt="Freshlife" src="/Header/img/icon-cart-round5.png" />
                {cartItems > 0 ? (
                  <span className="cart-item-count-header">{cartItems}</span>
                ) : (
                  <span className="cart-item-count-header">0</span>
                )}
              </div>
            </a>
          </div>

        </div>
      </div>
      <nav className="menu-header sticky-top">
        <ul className="menu-list-header">
          <li><a href={'/'} className="menu-text-header">TRANG CHỦ</a></li>
          <li><a href={'/AboutUs'} className="menu-text-header">GIỚI THIỆU</a></li>
          <li className="dropdown-header">
            <a href={'/Products'} className="menu-text-header">SẢN PHẨM</a>
            <ul className="dropdown-menu-header">
              <li><a href={"/RauCu"}>Rau củ</a></li>
              <li><a href={"/NguCoc"}>Ngũ cốc</a></li>
              <li><a href={"/TraiCay"}>Trái cây</a></li>
              <li><a href={"/HoaQuaSay"}>Hoa quả sấy</a></li>
              <li><a href={"/GiaVi"}>Gia vị</a></li>
              <li><a href={"/ThucUong"}>Thức uống</a></li>
            </ul>
          </li>
          <li><a href={'/Blog'} className="menu-text-header">BLOG</a></li>
          <li><a href={'/Policy'} className="menu-text-header">CHÍNH SÁCH</a></li>
          <li><a href={'/ContactUs'} className="menu-text-header">LIÊN HỆ</a></li>
        </ul>
      </nav>
    </>
  );
}

export default Header;