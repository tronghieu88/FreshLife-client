import React, { useState, useEffect } from "react";
import "./homepage.css";
import PromotionProduct from "../../Component/product_promotion/product_promotion";
import AutoScrollingBanner from "../../Component/ScrollingBanner/ScrollingBanner";
import Product from "../../Component/product/product";
import { apiProduct } from "../../Api/product";
import { apiBlog } from "../../Api/blog";

const Homepage = () => {
  const [promotionProducts, setPromotionProducts] = useState([]);
  const [newProducts, setNewProducts] = useState([]);
  const [bestProducts, setBestProducts] = useState([]);
  const [blogItems, setBlogItems] = useState([]);
  const maxContentLength = 250;

  useEffect(() => {
    const fetchData = async () => {
      try {
        //Sản phẩm giảm giá
        const promotion = await apiProduct();
        console.log("promotion");
        const promotionPro = promotion.products.filter((p) => {
          if (p.price != p.sale_price) {
            return p;
          }
        });
        setPromotionProducts(promotionPro);
        console.log(promotionPro);

        const modifiedPromotion = promotionPro.map((product) => ({
          ...product,
          discountPercentage: Math.ceil(
            100 -
              (parseFloat(product.sale_price) * 100) / parseFloat(product.price)
          ),
        }));
        setPromotionProducts(modifiedPromotion);

        //sản phẩm mới
        const pr = await apiProduct();
        console.log("first");
        const newPro = pr.products.filter((i) => {
          if (i.is_new === "new") {
            return i;
          }
        });
        setNewProducts(newPro);
        console.log(newPro);

        //sản phẩm bán chạy
        const best = await apiProduct();
        const bestPro = best.products.filter((b) => {
          if (b.is_best === "true") {
            return b;
          }
        });
        setBestProducts(bestPro);
        console.log(bestPro);

        //blog
        const blog = await apiBlog();
        console.log("blog");
        const bestBlog = blog.blogs;
        setBlogItems(bestBlog);
        console.log(bestBlog);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <AutoScrollingBanner />
      <div className="container_homepage">
        <div style={{ marginTop: 20 }}>
          <b className="p.homepage b_homepage">GIẢM GIÁ SỐC</b>
        </div>
        <hr />
        <div className="homepage">
          {promotionProducts.slice(0, 6).map((product, index) => (
            <PromotionProduct
              key={index}
              product={{
                productId: product._id,
                discountPercentage: product.discountPercentage,
                image: product.image_1,
                productname: product.name,
                discountedPrice: product.sale_price,
                price: product.price,
              }}
            />
          ))}
        </div>
        <div className="box_homepage">
          <b className="b_homepage">SẢN PHẨM MỚI</b>
        </div>
        <hr className="hr2_homepage" />

        <div className="homepage">
          {newProducts.slice(0, 6).map((products, index) => (
            <Product
              key={index}
              imageUrl={products.image_1}
              name={products.name}
              price={products.price}
              cornerImage={products.corner_img}
            />
          ))}
        </div>
        <div className="box_homepage">
          <b className="b_homepage">SẢN PHẨM BÁN CHẠY</b>
        </div>
        <hr className="hr2_homepage" />
        <div className="homepage">
          {bestProducts.slice(0, 6).map((products, index) => (
            <Product
              key={index}
              imageUrl={products.image_1}
              name={products.name}
              price={products.price}
              cornerImage={products.corner_img}
            />
          ))}
        </div>
        <div>
          <b className="b_homepage">BLOG</b>
          <hr />
        </div>
        <div className="homepage blog-container_homepage">
          {blogItems.slice(0, 3).map((blogs, index) => (
            <div key={index} className="blog-item_homepage">
              <img src={blogs.img} alt="Blog" />
              <div className="blog-content_homepage">
                <p className="p._homepage">
                  <a href="BlogDetail" className="title_homepage a_homepage">
                    {blogs.title}
                  </a>
                </p>
                <span>
                  {blogs.content_short
                    ? blogs.content_short.slice(0, maxContentLength)
                    : ""}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
