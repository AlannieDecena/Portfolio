import React, { useState } from 'react';

export default function useSlider() {
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);

  const changeImage = (step) => {
    setCurrentImage((currentImage + step + images.length) % images.length);
  };

  return {
    images,
    setImages,
    currentImage,
    changeImage,
  };
}
