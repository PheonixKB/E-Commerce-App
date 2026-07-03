import React, { useEffect, useState } from "react";

const ProductGallery = ({ product }) => {
  const images = product?.image || [];

  const [selectedImage, setSelectedImage] = useState(images[0] || "");

  useEffect(() => {
    setSelectedImage(images[0] || "");
  }, [product]);

  return (
    <div className="flex flex-col lg:flex-row gap-6">

      {/* ================= Thumbnails ================= */}

      <div className="order-2 lg:order-1 flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible scrollbar-hide">

        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`flex-shrink-0 w-[110px] h-[110px] rounded-lg overflow-hidden border transition-all duration-300 ${
              selectedImage === image
                ? "border-2 border-black"
                : "border border-gray-300 hover:border-black"
            }`}
          >
            <img
              src={image}
              alt={`${product.name} ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}

      </div>

      {/* ================= Main Image ================= */}

      <div className="order-1 lg:order-2 flex-1">

        <div className="bg-gray-100 rounded-lg overflow-hidden">

          <img
            key={selectedImage}
            src={selectedImage}
            alt={product.name}
            className="w-full h-[500px] sm:h-[650px] lg:h-[800px] object-cover transition-all duration-300"
          />

        </div>

      </div>

    </div>
  );
};

export default ProductGallery;