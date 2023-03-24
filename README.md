Install Tailwind CSS, React, and React Modal

```
npm install react react-dom react-modal tailwindcss
```

Then, you can create a new PhotoGallery component in a file called `PhotoGallery.js`:


```js
import React, { useState } from "react";
import Modal from "react-modal";
import ImageCard from "./ImageCard";

Modal.setAppElement("#root");

function PhotoGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
        className="modal"
        overlayClassName="overlay"
      >
        {selectedImage && (
          <>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <h2 className="text-2xl font-bold mb-2">{selectedImage.title}</h2>
            <p>{selectedImage.description}</p>
            <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg mt-4" onClick={closeModal}>
              Close
            </button>
          </>
        )}
      </Modal>
    </div>
  );
}

export default PhotoGallery;
```

In this component, we're using the `useState` hook to keep track of the currently selected image, and the `Modal` component from the `react-modal` library to display additional information about the selected image in a modal when it's clicked on.

We're also using another component called `ImageCard`, which we'll define in a separate file called `ImageCard.js` which will display each image in a responsive card:

`ImageCard.js`
```js
import React from "react";

function ImageCard({ image, setSelectedImage }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={image.src}
        alt={image.alt}
        onClick={() => setSelectedImage(image)}
        className="cursor-pointer hover:opacity-75 transition-all duration-500"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{image.title}</h2>
        <p className="text-gray-700">{image.description}</p>
      </div>
    </div>
  );
}

export default ImageCard;
```

Finally, in your main `App` component, you can import and use the `PhotoGallery` component:

`App.js`
```js
import React from "react";
import PhotoGallery from "./components/PhotoGallery";
import ImageCard from "./components/ImageCard";

const images = [
  {
    id: 1,
    src: "https://via.placeholder.com/600x400",
    alt: "Placeholder image",
    title: "Image 1",
    description: "This is a placeholder image.",
  },
  {
    id: 2,
    src: "https://via.placeholder.com/600x400",
    alt: "Placeholder image",
    title: "Image 2",
    description: "This is a placeholder image.",
},
{
id: 3,
src: "https://via.placeholder.com/600x400",
alt: "Placeholder image",
title: "Image 3",
description: "This is a placeholder image.",
},
];

function App() {
return (
<div className="container mx-auto p-4">
<PhotoGallery images={images} />
</div>
);
}

export default App;
```
