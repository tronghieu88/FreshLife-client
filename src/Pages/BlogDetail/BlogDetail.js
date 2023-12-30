import React, { useState, useEffect } from 'react';
import './BlogDetail.css';
import { apiBlog } from '../../Api/blog';

const BlogDetail = () => {
  const [blog_detail, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const blog = await apiBlog();
        const detailBlog = blog.blogs;
        setBlog(detailBlog);
        console.log(detailBlog);
        setBlog(detailBlog[0]); // Lấy thông tin của object đầu trong mảng
      } catch (error) {
        console.error('Lỗi khi tải dữ liệu blog:', error);
      }
    };

    fetchBlogData();
  }, []);

  if (!blog_detail) {
    return <p>Không tìm thấy blog!</p>;
  }

  const { title, content_short, img } = blog_detail;

  const paragraphs = content_short && content_short.split('\n').map((paragraph, index) => {
    let className = "content_blogdetail";

    // Áp dụng font-weight: bold cho đoạn văn thứ 2 và thứ 7
    if (index + 1 === 2 || index + 1 === 6 || index + 1 === 10) {
      className += " bold-paragraph_blogdetail";
    }

    return (
      <p key={index} className={className}>
        {paragraph}
      </p>
    );
  });

  return (
    <div>
      <div className='trangchu_blogdetail'>
      <a href= {'/'}>Trang chủ {'>'} </a>
      <a href= {'/Blog'}> Blog {'>'}</a>
      <a href= {'/BlogDetail'}> Sức mạnh của rau củ </a>
      </div>
      <h1 className='title_blogdetail'>{title}</h1>
      <hr className="my-4 width-hr" />
      <p className="content_blogdetail">{content_short.split('\n')[0]}</p> {/* Hiển thị đoạn văn đầu tiên */}
      <img src={img} alt={title} className="img-blog_detail" /> {/* Thêm ảnh vào đây */}
      {paragraphs.slice(1)} {/* Hiển thị các đoạn văn còn lại */}
    </div>
  );
};

export default BlogDetail;
