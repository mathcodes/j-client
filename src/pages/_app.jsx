import Contact from "@/components/Contact";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import {Hero} from "@/components/Hero";
import React from "react";
import PhotoGallery from "../components/PhotoGallery";
import "../styles/tailwind.css";

const images = [
  {
    id: 1,
    src: "../images/gallery/1.png",
    alt: "Placeholder image",
    title: "Image 1",
    description: "This is a placeholder image.",
  },
  {
    id: 2,
    src: "../images/gallery/2.png",
    alt: "Placeholder image",
    title: "Image 2",
    description: "This is a placeholder image.",
},
{
id: 3,
src: "../images/gallery/3.png",
alt: "Placeholder image",
title: "Image 3",
description: "This is a placeholder image.",
},
{
id: 4,
src: "../images/gallery/4.png",
alt: "Placeholder image",
title: "Image 4",
description: "This is a placeholder image.",
},
{
id: 5,
src: "../images/gallery/5.png",
alt: "Placeholder image",
title: "Image 5",
description: "This is a placeholder image.",
},

];

function App() {
return (
<div className="container px-20 mx-auto">
  <Header />
  <Hero />
<PhotoGallery images={images} />
<Contact/>
<Footer />
</div>
);
}

export default App;