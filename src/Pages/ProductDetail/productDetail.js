import React, { useState, useEffect } from 'react';
import './productDetail.css';
import DanhMucSanPham from '../../Component/DMSP/DMSP';
import Product from '../../Component/product/product';
import ImageSlider from '../../Component/ImageSlider/imageSlider'
import CommentFeedback from '../../Component/Comment/comment';
import { apiProduct } from "../../Api/product";


const ProductDetail = () => {
  const [bestProducts, setBestProducts] = useState([]);
  const [similarProductData, setSimilarProductData] = useState([]);
  const [images, setImageData] = useState([]);
  const [productDetail, setProductDetail] = useState([]);

  useEffect(() => {
    const fetchBestsellerData = async () => {
      try {
        // Sản phẩm bán chạy
        const best = await apiProduct();
        const bestPro = best.products.filter((b) => {
          if (b.is_best === "true") {
            return b;
          }
        });
        setBestProducts(bestPro);
        console.log(bestPro);
        // Fetch other data here if needed
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const fetchSimilarProductData = async () => {
      try {
        //  Sản phẩm tương tự
        const similar = await apiProduct();
        const similarPro = similar.products.filter((b) => {
          if (b.type === "traicay") {
            return b;
          }
        });
        setSimilarProductData(similarPro);
        console.log(similarPro);
        // Fetch other data here if needed
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    //BA HÌNH ẢNH
    const fetchImageData = async () => {
      try {
        const img = await apiProduct();
        const product = img.products.find((a) => a.name === "Xoài keo");

        if (product) {
          setProductDetail({
            name: product.name,
            description: product.description,
            price: product.price,
            sale_price: product.sale_price,
            quantity: product.quantity
          });

          setImageData([product]);
        }
      } catch (error) {
        console.error('Error fetching image data:', error);
      }
    };
    fetchBestsellerData();
    fetchSimilarProductData();
    fetchImageData();
  }, []);

  return (
    <>
      <div className='a_productDetail' >
        <a href={'/'} className='a1'>Trang chủ {'>'} </a>
        <a href={'/ProductDetail'} className='a2'>Sản phẩm</a>
      </div>
      <div className="product-detail_detail">
        <div className="left-section_detail">
          <DanhMucSanPham />
        </div>
        <div className="right-section_detail">
          <div className="product-info_detail">
            <div className="image_detail">
              {images.length > 0 && (
                <ImageSlider images={images[0]} />
              )}
            </div>

            <div className="details_detail">
              <h3>{productDetail.name}</h3>
              <div>
                <span style={{ fontWeight: 'bold' }}>Giá tốt nhất:</span> <span style={{ color: ' rgba(53, 166, 59, 1)' }}> {productDetail.sale_price}đ</span>

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{/* Sử dụng nhiều khoảng trắng */}
                <span style={{ fontWeight: 'bold' }}>Giá:</span> <span style={{ textDecoration: 'line-through', color: 'rgba(252, 139, 25, 1)' }}> {productDetail.price}</span>

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{/* Sử dụng nhiều khoảng trắng */}
                <span style={{ color: 'white', backgroundColor: 'rgba(252, 139, 25, 1)' }}>-{Math.round(((productDetail.price - productDetail.sale_price) / productDetail.price) * 100)}%</span>
              </div>

              <div>Tình trạng: {productDetail.quantity > 0 ? 'Còn hàng' : 'Hết hàng'}</div>
              <label>Số lượng:</label>
              <input type="number" min="1" className='quantity-input_detail ' defaultValue="1"></input>

              <hr />
              <div><h6 style={{ color: 'rgba(252, 139, 25, 1)' }}>Mô tả:</h6> {productDetail.description}</div>
              <hr />
              <button className="add-to-cart_detail">Thêm vào giỏ hàng</button>
            </div>
          </div>
          <div className="feedback_detail">
            <CommentFeedback />
          </div>
          <div className="similar-product_detail">
            <div className='underline-text_detail'>SẢN PHẨM TƯƠNG TỰ</div>
            <div className="product-row_detail">
              {similarProductData.slice(1, 6).map((item, index) => (   //Lấy 5 dữ liệu đầu trong file json
                <Product
                  key={index}
                  imageUrl={item.image_1}
                  name={item.name}
                  price={item.price}
                  cornerImage={item.corner_img}
                />
              ))}
            </div>
          </div>
          <div className="bestseller_detail">
            <div className='underline-text_detail'>SẢN PHẨM BÁN CHẠY</div>
            <div className="product-row_detail">
              {bestProducts.slice(0, 5).map((products, index) => (   //Lấy 5 dữ liệu đầu trong file bán chạy
                <Product
                  key={index}
                  imageUrl={products.image_1}
                  name={products.name}
                  price={products.price}
                  cornerImage={products.corner_img}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;


