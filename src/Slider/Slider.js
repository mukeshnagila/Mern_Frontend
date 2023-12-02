// src/components/ImageSlider.js
import React, { useState, useEffect, useCallback } from 'react';
import "../Slider/Slider.css";

const ImageSlider = () => {
  // Define an array of image URLs
  const images = [
    'https://img-c.udemycdn.com/notices/home_carousel_slide/image/1a871a12-4289-4d90-90e8-641d10a73f69.jpg',
    'https://img-c.udemycdn.com/notices/home_carousel_slide/image/5bef67d5-1f8e-4323-a648-dc4779739cd8.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1);
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); 

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="image-slider">
      <img className='slider' src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
            <button className="slider-arrow prev" onClick={prevSlide}>
                &#9664; 
            </button>
            <button className="slider-arrow next" onClick={nextSlide}>
                &#9654; 
            </button>
    </div>
  );
};

export default ImageSlider;
