import React from 'react';
import FooterIcons from './FooterIcons';
import './Footer.css';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className="footer_component">
      <div className="container_component">
        <div className="column_center_footer">
          <img src="../Logo.png" style={{ width: 150, height: 100, marginRight: "10px" }} alt="Logo" />
          <p>FreshLife cung cấp các các thực phẩm tươi ngon, tự nhiên, giàu dinh dưỡng và có lợi với sức khỏe người dùng. </p>
        </div>
        <div class="box_column_footer">
          <div className="column_footer">
            {/* Customer care */}
            <h4 class="title_footer">Fresh Life</h4>
            <a href={"/"}>Trang chủ</a>
            <a href={"/AboutUs"}>Giới thiệu</a>
            <a href={"/Products"}>Sản phẩm</a>
            <a href={"/Blog"}>Blog</a>
            <a href={"/ContactUs"}>Liên hệ</a>
          </div>
          <div className="column_footer">
            {/* Policy */}
            <h4 class="title_footer">Hỗ trợ khách hàng</h4>
            <a href="/Policy">Phương thức vận chuyển</a>
           <a href={"/Policy"}>Các chính sách</a>
          </div>
          <div className="column_footer">
            <div className="column_footer">
              <h4 className="title_footer">Liên hệ</h4>
              <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginLeft: "70px", marginRight: "20px", marginBottom: "5px", verticalAlign: "middle" }} /> Khu phố 3, Linh xuân, thủ đức, TPHCM <br />
              <FontAwesomeIcon icon={faEnvelope} style={{ marginLeft: "70px", marginRight: "20px", marginBottom: "5px", verticalAlign: "middle" }} /> freshlife@gmail.com <br />
              <FontAwesomeIcon icon={faPhone} style={{ marginLeft: "70px", marginRight: "20px", verticalAlign: "middle" }} /> +84976254896
            </div>
          </div>
        </div>
      </div>
      <div style={{ borderTop: '2px solid green', margin: '0 -20px', padding: '10px 20px' }}></div>
      <div>
        <FooterIcons />
      </div>
    </footer>
  );
};

export default Footer;