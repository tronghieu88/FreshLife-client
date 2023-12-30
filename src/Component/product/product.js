import React from 'react';
import "./product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


const Product = ({ imageUrl, name, price, cornerImage }) => {
  return (
    <div className="component_product">

      {cornerImage && (
        <img
          className="cornerImage_product"
          alt=""
          src={cornerImage}
        />
      )}
      <img
        className="image_product"
        alt=""
        src={imageUrl}
      />
      <div className="text_product">
        <a className='a_product_component' href='/ProductDetail'><span className='name_product'>{name}</span></a>
        <span className="cost_product">{price}</span>
      </div>
      <button className='button_product'>
        <div><FontAwesomeIcon icon={faCartShopping} style={{ color: "#ffffff" }} /> Thêm giỏ hàng</div>
      </button>
    </div>
  );
};

export default Product;
