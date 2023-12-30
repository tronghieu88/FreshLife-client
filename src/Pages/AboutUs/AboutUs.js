import React, { useEffect, useState } from 'react';
import './AboutUs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
function Aboutus() {
  const [aboutData, setAboutData] = useState([]);

  useEffect(() => {
    fetch('/AboutUs/data/aboutus-DB.json')
      .then(response => response.json())
      .then(data => setAboutData(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <div className='containercontent_aboutus'>
        <div className='path-aboutus'>
          <a href={'/'}>Trang chủ {'>'} </a>
          <a href={'/AboutUs'}>Giới thiệu </a>
        </div>
        <div className="BannerAboutus">
          <img src='/AboutUs/img/Banner AboutUs.png' alt="About us" className='img-aboutus' />
        </div>
        <div className="Describe-content">Freshlife là thương hiệu thực phẩm hàng đầu Việt Nam, chuyên cung cấp các sản phẩm tươi ngon, chất lượng cao</div>
        <ul className="title_aboutus">
          {aboutData.map((item, index) => (
            <li className="container-aboutus li_aboutus" key={item.title}>
              {index % 2 === 0 ? (
                <>
                  <div className="item-aboutus">
                    <h1>{item.title}</h1>
                    {item.content}
                  </div>
                  <div className="timeline-image item-aboutus">
                    <img src={item.thumb} alt="" className='img-aboutus' />
                  </div>
                </>
              ) : (
                <>
                  <div className="timeline-image item-aboutus">
                    <img src={item.thumb} alt="" />
                  </div>
                  <div className="item">
                    <h1>{item.title}</h1>
                    {item.content}
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>

    </>
  );
}

export default Aboutus;