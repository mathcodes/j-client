import React, { useState } from "react";
import Modal from "react-modal";
import ImageCard from "./ImageCard";

function PhotoGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (<>
   <h1 className="container mx-auto mt-20 text-4xl font-bold text-center" id="gallery">Photo Gallery</h1>
    <div className="grid grid-cols-2 gap-4 my-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" id="modal">

      {images.map((image) => (
        <ImageCard
          key={image.id}
          image={image}
          setSelectedImage={setSelectedImage}
        />
      ))}
      <Modal
        isOpen={selectedImage !== null}
        onRequestClose={closeModal}
        contentLabel="Image Details"
        className="fixed inset-0 z-50 flex items-center justify-center"
        overlayClassName="overlay"
      >
        {selectedImage && (
          <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-lg">
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <h2 className="mb-2 text-2xl font-bold">{selectedImage.title}</h2>
            <p>{selectedImage.description}</p>
            <button className="px-4 py-2 mt-4 bg-gray-200 rounded-lg hover:bg-gray-300" onClick={closeModal}>
              Close
            </button>
          </div>
        )}
      </Modal>
    </div>
    </>
  );
}

export default PhotoGallery;
