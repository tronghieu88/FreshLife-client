import React from "react";
import "./product_promotion.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { addOrder } from "../../Api/order";

const PromotionProduct = ({ product }) => {
  const productChoose = product;
  const handleAddToCart = async () => {
    // console.log("first");
    // console.log(productChoose);
    // console.log("test", window.localStorage.getItem("user_id"));

    // lay "user_id" tu localStorage ra de su dung
    const user_id = window.localStorage.getItem("user_id");
    // call api
    const respone = await addOrder(productChoose.productId, 1, user_id);
    console.log("respone", respone);
  };

  const { discountPercentage, image, productname, discountedPrice, price } =
    product;

  return (
    <div className="khung_promotion">
      <div className="phantramgiam_promotion">{discountPercentage}%</div>
      <img className="img_promotion" src={image} alt={productname} />
      <div className="thongtin_promotion">
        <a className="a_promotion_component" href="/ProductDetail">
          <span className="name_promotion">{productname}</span>
        </a>
        {/* <span className='name_promotion'>{productname}</span> */}
        <span className="giamgia_promotion">{discountedPrice}</span>
        <span className="giagoc_promotion">{price}</span>
        <button className="button_promotion" onClick={handleAddToCart}>
          <div>
            <FontAwesomeIcon
              icon={faCartShopping}
              style={{ color: "#ffffff" }}
            />{" "}
            Thêm giỏ hàng
          </div>
        </button>
      </div>
    </div>
  );
};

export default PromotionProduct;
