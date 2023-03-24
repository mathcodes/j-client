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
        //   <div className="flex items-center justify-center w-full h-full p-4 bg-gray-900 flex-col-1 bg-opacity-80">
        //   <div className="flex flex-row items-center justify-between w-4/6 p-4 bg-gray-100 rounded-lg shadow-lg bg-opacity-80 h-3/6">
        //     <img src={selectedImage.src} alt={selectedImage.alt} className="flex items-start justify-between object-cover w-1/4 "/>
        //     <div className="w-1/2">
        //       <h2 className="mb-2 text-2xl font-bold">{selectedImage.title}</h2>
        //     <p>{selectedImage.description}</p>
        //     <div className="flex flex-row items-center ">
        //     <span className="text-pink-500 text-md">Price:</span>$450.00</div>
        //     <div className="flex flex-row items-center ">
        //     <span className="text-pink-500 text-md">Date:</span>Jan 23, 2019</div>
        //     <button className="px-10 py-2 mt-4 border rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:bg-white/20 hover:bg-gray-300" onClick={closeModal}>
        //       Close
        //     </button>
        //     </div>

        //   </div>
        //   <div>

        // </div>
        //   </div>
        <section class="text-gray-700 body-font overflow-hidden bg-white bg-opacity-80">
    <div class="container px-5 py-24 mx-auto">
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt="ecommerce" class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src="https://www.jonchristie.net/favicon.png" />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 class="text-sm title-font text-gray-700 tracking-widest">Outdoor</h2>
                <h1 class="text-gray-900 text-4xl title-font font-bold mb-1">Solar Art</h1>
                <div class="flex mb-4">
                    <span class="title-font font-medium text-2xl text-gray-900">$58.00</span>
                </div>
                <p class="leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem blanditiis ipsa ipsum quae quia quos saepe totam? Aliquam deleniti mollitia reiciendis totam! Ad blanditiis dolorum et molestias praesentium saepe voluptates.</p>
                <div class="flex border-t border-gray-300 mt-5 pt-5">
                <button className="w-full px-10 py-2 mt-4 font-bold text-white border rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:bg-white/20 hover:bg-gray-300" onClick={closeModal}>
                        Add to Cart
                    </button>
                    <button className="w-full px-10 py-2 mt-4 font-bold text-white border rounded-lg bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 hover:bg-white/20 hover:bg-gray-300" onClick={closeModal}>
        Close  </button>
                </div>
            </div>
        </div>

    </div>
</section>

        )}
      </Modal>

    </div>
  </>


  );
}

export default PhotoGallery;
