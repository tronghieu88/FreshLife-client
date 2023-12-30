import React, { useState, useEffect } from 'react';
import './comment.css';

const CommentFeedback = () => {
    const [activeTab, setActiveTab] = useState('productInfo');
    const [reviews, setReviews] = useState([]);
    const [number, setNumber] = useState(0);
    const [productInfo, setProductInfo] = useState({});
    const [commentInput, setCommentInput] = useState('');
    const [userInput, setUserInput] = useState('Người dùng mới');
    const [ratingInput, setRatingInput] = useState(0);

    useEffect(() => {
        fetch('../../Data/feedback.json')
            .then(response => response.json())
            .then(data => {
                setNumber(data.reviews.length);
                setReviews(data.reviews);
                setProductInfo(data.productInfo);
            })
            .catch(error => console.error('Error loading feedback data:', error));
    }, []);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleCommentInputChange = (e) => {
        setCommentInput(e.target.value);
    };

    const handleUserInputChange = (e) => {
        setUserInput(e.target.value);
    };

    const handleRatingInputChange = (e) => {
        setRatingInput(parseFloat(e.target.value));
    };

    const handleAddComment = () => {
        // Thực hiện logic để thêm bình luận vào danh sách reviews
        const newReview = {
            id: reviews.length + 1,
            user: userInput,
            rating: ratingInput,
            comment: commentInput,
            date: new Date().toISOString().split('T')[0]
        };

        // Cập nhật danh sách reviews
        setReviews([...reviews, newReview]);

        // Đặt các ô input về trạng thái rỗng
        setCommentInput('');
        setUserInput('Người dùng mới');
        setRatingInput(0);
    };

    return (
        <div className="thongtinsp">
            <div className="congdung">
                <button
                    className={` ${activeTab === 'productInfo' ? 'active' : ''}`}
                    onClick={() => handleTabClick('productInfo')}
                    style={{
                        backgroundColor: activeTab === 'productInfo' ? '#37A747' : '',
                        borderRight: activeTab === 'productInfo' ? 'none' : '',
                        borderBottom: activeTab === 'comment' ? 'none' : '1px solid #ddd',
                        color: activeTab === 'productInfo' ? '#F3FCF2' : ''
                    }}
                >
                    Thông tin sản phẩm
                </button>
                <button
                    className={` ${activeTab === 'comment' ? 'active' : ''}`}
                    onClick={() => handleTabClick('comment')}
                    style={{
                        backgroundColor: activeTab === 'comment' ? '#37A747' : '',
                        borderLeft: activeTab === 'comment' ? 'none' : '',
                        borderBottom: activeTab === 'productInfo' ? 'none' : '1px solid #ddd',
                        color: activeTab === 'comment' ? '#F3FCF2' : ''
                    }}

                >
                    Bình luận
                </button>
            </div>
            <div className='container_info'>
                {activeTab === 'productInfo' && (
                    <div className='container_pro_info'>
                        <div style={{ padding: "10px" }}>
                            <p style={{ color: "#FF8C00", fontWeight:"bold" }}>Thông tin chi tiết sản phẩm:</p>
                            <p><strong>Tên sản phẩm:</strong> {productInfo.name}</p>
                            <p><strong>Mô tả:</strong> {productInfo.description}</p>
                            <p><strong>Giá:</strong> {productInfo.price}</p>
                        </div>
                        <div className="vertical-line" />
                        <div>
                                <img src="../image/vstp.png" alt="" /> Lựa chọn tốt cho sức khỏe
                            
                                <img src="../image/vstp.png" alt="" /> Không biến đổi gen
                        </div>
                    </div>
                )}
                {activeTab === 'comment' && (
                    <div style={{ padding: "10px" }}>
                        <div>
                            {/* <input
                                type="text"
                                placeholder="User"
                                value={userInput}
                                onChange={handleUserInputChange}
                            /> */}
                            <span className='bolder'>Nhập bình luận của bạn:</span>
                            <input
                                type="text"
                                placeholder="Nhập bình luận của bạn"
                                value={commentInput}
                                onChange={handleCommentInputChange}
                            />
                            <span className='bolder'>Rating:</span>
                            <input
                                type="number"
                                placeholder="Rating"
                                value={ratingInput}
                                onChange={handleRatingInputChange}
                                min="1"
                                max="5"
                            />
                        </div>
                        <button className='button' onClick={handleAddComment}>Thêm Bình Luận</button><br />
                        <div></div>
                        <p className='bolder'>Số lượng đánh giá: {number}</p>
                        <ul>
                            {reviews.map(review => (
                                <li key={review.id}>
                                    <p className='space'><strong>User: </strong> {review.user}</p>
                                    <p className='space'><strong>Rating: </strong>{review.rating}</p>
                                    <p className='space'><strong>Comment: </strong> {review.comment}</p>
                                    <p className='space'><strong>Date: </strong> {review.date}</p>
                                </li>
                            ))}
                        </ul>
                        {/* Ô input để nhập bình luận */}

                    </div>
                )}
            </div>
        </div >
    );
};

export default CommentFeedback;