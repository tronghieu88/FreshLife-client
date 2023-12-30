import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Aboutus from './Pages/AboutUs/AboutUs';
import Homepage from './Pages/Homepage/homepage';
import Policy from './Pages/Policy/Policy';
import ContactUs from './Pages/ContactUs/contact_us';
import Cart from './Pages/giohang/giohang';
import LoginRegisterModal from './Pages/LoginRegister/LoginRegisterModal';
import Payment from './Pages/thanhtoan/thanhtoan';
import Blog from './Pages/Blog/Blog';
import BlogDetail from './Pages/BlogDetail/BlogDetail';
import ProductList from './Pages/ProductList/ProductList';
import ProductDetail from './Pages/ProductDetail/productDetail';
import Account from './Pages/Account/Account';
import Order from './Pages/My_order/My_order';

function App() {
  return (
    <Router>
      
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/AboutUs" element={<Aboutus />} />
        <Route path="/Products" element={<ProductList />} />
        <Route path="/RauCu" element={<ProductList />} />
        <Route path="/NguCoc" element={<ProductList />} />
        <Route path="/TraiCay" element={<ProductList />} />
        <Route path="/HoaQuaSay" element={<ProductList />} />
        <Route path="/GiaVi" element={<ProductList />} />
        <Route path="/ThucUong" element={<ProductList />} />
        <Route path="/ProductDetail" element={<ProductDetail/>} />
        
        <Route path="/BlogDetail" element={<BlogDetail />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Policy" element={<Policy />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/LoginRegister" element={<LoginRegisterModal/>} />
        <Route path="/MyAccount" element={<Account/>} />
        <Route path="/MyOrder" element={<Order/>} />

        <Route path="/Cart" element={<Cart/>} />
        <Route path="/Payment" element={<Payment/>} />
      </Routes>
      <Footer /> 
    </Router>
    
    
  );
}

export default App;