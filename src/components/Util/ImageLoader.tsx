import React, { useState } from 'react';
import './index.css';

interface ImageWithLoadingProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageWithLoading: React.FC<ImageWithLoadingProps> = ({ src, alt,className }) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoaded = () => {
    setLoading(false);
  };

  return (
    <div className="loader">
      {loading && <div className="loading-spinner"></div>}
      <img
        src={src}
        alt={alt}
        className={className || `image ${loading ? 'hidden' : ''}`}
        onLoad={handleImageLoaded}
      />
    </div>
  );
};

export default ImageWithLoading;
