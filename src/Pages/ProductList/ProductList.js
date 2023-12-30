import React, { useState, useEffect } from 'react';
import './ProductList.css';
import DanhMucSanPham from '../../Component/DMSP/DMSP';
import Product from '../../Component/product/product';
import { apiProduct } from "../../Api/product";

const ProductList = () => {
  const [sortOption, setSortOption] = useState('default');
  const [sortedProducts, setSortedProducts] = useState([]);
  const [products, setProducts] = useState([]);

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const product = await apiProduct();
        const products = product.products.filter((p) => {
        if (p.type === "traicay") {
          return p;}
        
      
        });
        setProducts(products);
        console.log(products);

        let sortedProducts = sortOption !== 'default' ? [...products] : [...products];

        if (sortOption === 'lowToHigh') {
          sortedProducts.sort((a, b) => a.price - b.price);
        } else if (sortOption === 'highToLow') {
          sortedProducts.sort((a, b) => b.price - a.price);
        }

        setSortedProducts(sortedProducts);
      } catch (error) {
        console.error('Lỗi khi tải dữ liệu:', error);
      }
    };

    fetchData();
  }, [sortOption]);

  const chunkedProduct = [sortedProducts];

  return (
    <>
      <div className='sanpham_productList'>
          <a href= {'/'}>Trang chủ {'>'} </a>
          <a href= {'/Raucu'}>Trái cây </a>
      </div>
      <div className='container_productList'>
        <div className='left-section_productList'>
          <DanhMucSanPham />
        </div>

        <div className='right-section_productList'>
          <div className='tenDMContainer_productList'>
            <h2 className='tenDM_productList'>TRÁI CÂY</h2>
            <div className='tenDM_sortContainer_productList'>
              <div className='tenDM_sortLabel_productList'>Sắp xếp theo</div>
              <select
                className='tenDM_sortInput_productList'
                value={sortOption}
                onChange={handleSortChange}
              >
                <option value='default'>Mặc định</option>
                <option value='lowToHigh'>Giá từ thấp đến cao</option>
                <option value='highToLow'>Giá từ cao đến thấp</option>
              </select>
            </div>
          </div>

          {chunkedProduct.map((row, rowIndex) => (
            <div className='sanpham-container_productList' key={rowIndex}>
              <div className='sanpham1_productList'>
              {sortedProducts.slice(0, 12).map((product, index) =>(
                // {sortedProducts.map((product, index) => (
                  <Product
                    key={index}
                    imageUrl={product.image_1}
                    name={product.name}
                    price={product.price}
                    cornerImage={product.corner_img}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;