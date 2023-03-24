import React from "react";

function ImageCard({ image, setSelectedImage }) {
  return (
    <div className="overflow-hidden bg-white rounded-lg shadow-md">
      <img
        src={image.src}
        alt={image.alt}
        onClick={() => setSelectedImage(image)}
        className="object-cover object-center w-full h-56 transition-all duration-500 cursor-pointer sm:h-64 md:h-80 lg:h-96 hover:opacity-75"
      />
      <div className="p-4">
        <h2 className="mb-2 text-lg font-bold">{image.title}</h2>
        <p className="text-gray-700">{image.description}</p>
      </div>
    </div>
  );
}

export default ImageCard;
