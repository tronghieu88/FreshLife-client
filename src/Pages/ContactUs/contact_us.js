import React from 'react';
import './contact_us.css'
const ContactUs = () => {
  return (
    <div className="page_contact">
       <div className='path-contact'>
        <a href= {'/'}>Trang chủ {'>'} </a>
        <a href= {'/ContactUs'}>Liên hệ </a>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.347116472675!2d106.7441!3d10.8414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529f119d7e2ad%3A0x6e1fafa68ef36b70!2zUGjDum5nIE1pbmggVHJ1bmcgVG9ydCB2w6AgVGjhu4tpLCBC4bqnbmcgbmdo4buHLCBLaeG7h3QgTmFt!5e0!3m2!1sen!2s!4v1469949400561"          
          width="1302px"
          height="362px"
          style={{ border: 0 }}
          allowFullScreen
        ></iframe>
      </div>
      <div className="container_contact">
        <div className="left-section_contact">
          <h2 className="h2_contact">Contact Form</h2>
          <p className="text_body_contact">Vui lòng điền vào mẫu dưới đây</p>
          {/* BEGIN FORM*/}
          <form action="#" role="form">
            <div className="mb-3 row">
              <label htmlFor="contacts-name" className="col-sm-2 col-form-label">Họ và tên:</label>
              <div className="col-sm-10">
              <input type="text" id="contacts-name" className="form-control" />
              </div>           
            </div>

            <div className="mb-3 row">
              <label htmlFor="contacts-email" className="col-sm-2 col-form-label">Email:</label>
              <div className="col-sm-10">
              <input type="email" id="contacts-email" className="form-control" />
              </div>            
            </div>

            <div className="mb-3">
              <label htmlFor="contacts-message" className="form-label">Nội dung</label>
              <textarea className="form-control" rows="5" id="contacts-message"></textarea>
            </div>

            <button className="btn btn-success" type="submit">GỬI</button>
            <button className="btn btn-danger" type="reset">XÓA</button>
          </form>
        </div>

        <div className="right-section_contact">
          <h2 className="h2_contact">Liên hệ:</h2>
          <address>
            <h2 className="h2_contact">Fresh Life</h2>
            <span className="text_body2_contact"> Khu phố 3, Thành phố Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam</span>
            <br />
            <span className="text_body2_contact"> Số điện thoại: 0921345823</span>
          </address>
          <address>
            <span className="header_2_contact">Email</span>
            <br />
            <a href="mailto:info@email.com">freshlife@gmail.com</a>
            <br />
            <div className="social-icons_contact">
              <a href="https://www.facebook.com/your-facebook-page-url" target="_blank" rel="noopener noreferrer">
                <img alt="Facebook" src="/ContactUs/img/facebook_icon.png" />
              </a>
              <a href="https://www.instagram.com/your-instagram-page-url" target="_blank" rel="noopener noreferrer">
                <img alt="Facebook" src="/ContactUs/img/insta_icon.png" />
              </a>
            </div>
          </address>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
