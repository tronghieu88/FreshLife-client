import React, { useState, useEffect } from 'react';
import './Blog.css';
import Xembaiviet from '../../Component/xembaivietBlog/xembaiviet';
import { Link } from 'react-router-dom';
import { apiBlog } from '../../Api/blog';
const Blog = () => {
  const [blog, setBlog] = useState([]);
  const maxContentLength = 250; // Số ký tự tối đa bạn muốn hiển thị

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const blog = await apiBlog();
        const bestBlog = blog.blogs;
        setBlog(bestBlog);
        console.log(bestBlog);
      } catch (error) {
        console.error('Lỗi khi tải dữ liệu blog:', error);
      }
    };

    fetchBlogData();
  }, []);

  return (
    <div className='container_blog'>
      <div className='trangchu_blog'>
      <a href= {'/'}>Trang chủ {'>'} </a>
      <a href= {'/Blog'}>Blog </a>
      </div>

      <div className='baiviet_blog'>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-newspaper" viewBox="0 0 16 16">
          <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5z" />
          <path d="M2 3h10v2H2zm0 3h4v3H2zm0 4h4v1H2zm0 2h4v1H2zm5-6h2v1H7zm3 0h2v1h-2zM7 8h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2z" />
        </svg>
        BÀI VIẾT
      </div>

      {blog.map((post, index) => (
        <React.Fragment key={index}>
          {/* Thêm thẻ Link cho tiêu đề để chuyển hướng đến trang BlogDetail */}
          <Link to={`/BlogDetail/`} className="title-link_blog custom-link_blog">
            <div className="post-container_blog">
              <img src={post.img} alt={post.title} className="img_blog" />
              <div className="post-item_blog">
                <h2 className='title_blog'>{post.title}</h2>
                <p>{post['content_short'].slice(0, maxContentLength)}...</p>
                <Xembaiviet />
              </div>
            </div>
          </Link>
          {index !== blog.length - 1 && <hr className="my-4 width-hr_blog" />}
        </React.Fragment>
      ))}

      <div style={{ marginLeft: "1187px" }}>
        <div style={{ display: 'flex', gap: '2px' }}>
          <p className='sotrang-button_blog'>1</p>
          <p className='sotrang-button_blog'>2</p>
          <p className='sotrang-button_blog'>3</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
