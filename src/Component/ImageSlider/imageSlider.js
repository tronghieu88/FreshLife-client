import './imageSlider.css';
import React, { useState, useEffect } from 'react';


const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % 3;
    setCurrentImageIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + 3) % 3;
    setCurrentImageIndex(prevIndex);
  };

  return (
    <div className="image-slider">
      <div className="slider-container">
        <img src={images[`image_${currentImageIndex + 1}`]} alt={`Slide ${currentImageIndex + 1}`} />
        <button onClick={prevImage} className="arrow-button left-arrow">&#8249;</button>
        <button onClick={nextImage} className="arrow-button right-arrow">&#8250;</button>
      </div>

      <div className="thumbnail-container">
        {[1, 2, 3].map((index) => (
          <img
            key={index}
            src={images[`image_${index}`]}
            alt={`Thumbnail ${index}`}
            onClick={() => setCurrentImageIndex(index - 1)}
            className={currentImageIndex === index - 1 ? 'thumbnail selected' : 'thumbnail'}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;