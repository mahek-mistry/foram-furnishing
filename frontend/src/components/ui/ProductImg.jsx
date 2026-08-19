import React, { useState, useEffect } from "react";

const ProductImg = ({ images = [] }) => {

  const [mainImg, setMainImg] = useState("");
  const [zoomStyle, setZoomStyle] = useState({});

  useEffect(() => {
    if (images.length > 0 && images[0]?.url) {
      setMainImg(images[0].url);
    }
  }, [images]);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();

    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setZoomStyle({
      transformOrigin: `${x}% ${y}%`,
      transform: "scale(1.5)",
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({ transform: "scale(1)" });
  };

  if (!images.length) return <p>No images available</p>;

  return (
    <div className="flex gap-5">

      {/* Thumbnails */}
      <div className="flex flex-col gap-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img?.url || "/placeholder.png"}
            onClick={() => setMainImg(img?.url)}
            className="cursor-pointer w-20 h-20 border object-cover"
          />
        ))}
      </div>

      {/* Main Image */}
      <div className="overflow-hidden border w-[500px] h-[500px] flex items-center justify-center">
        <img
          src={mainImg || "/placeholder.png"}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={zoomStyle}
          className="max-w-full max-h-full object-contain transition-transform duration-200"
        />
      </div>

    </div>
  );
};

export default ProductImg;