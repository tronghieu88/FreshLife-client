import React, { useState, useEffect } from 'react';
import './ScrollingBanner.css';

const AutoScrollingBanner = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Di chuyển hình hiện tại sang trái
      const currentImageContainer = document.querySelector(`.banner .visible`);
      currentImageContainer.style.left = `-${currentImage * 200}px`;
      setCurrentImage((prevImage) => (prevImage + 1) % 4);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner-container">
      <div id="banner" className="banner">
        {[0, 1, 2, 3].map((imageNumber) => (
          <img
            key={imageNumber}
            src={`../Homepage/img/Banner/${imageNumber + 1}.png`}
            alt={`Image ${imageNumber + 1}`}
            className={currentImage === imageNumber ? 'visible' : 'hidden'}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoScrollingBanner;