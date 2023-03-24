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
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nisl nibh aliquet nisl, eget aliquam nisl nisl sit amet dolor. Sed euismod, nunc ut aliquam aliquam, nisl nibh aliquet nisl, eget aliquam nisl nisl sit amet dolor.",
  },
  {
    id: 2,
    src: "../images/gallery/2.jpg",
    alt: "Placeholder image",
    title: "Image 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nisl nibh aliquet nisl, eget aliquam nisl nisl sit amet dolor. Sed euismod, nunc ut aliquam aliquam, nisl nibh aliquet nisl, eget aliquam nisl nisl sit amet dolor.",
},
{
id: 3,
src: "../images/gallery/3.png",
alt: "Placeholder image",
title: "Image 3",
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nisl nibh aliquet nisl, eget aliquam nisl nisl sit amet dolor. Sed euismod, nunc ut aliquam aliquam, nisl nibh aliquet nisl, eget aliquam nisl nisl sit amet dolor.",
},
{
id: 4,
src: "../images/gallery/4.png",
alt: "Placeholder image",
title: "Image 4",
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nisl nibh aliquet nisl, eget aliquam nisl nisl sit amet dolor. Sed euismod, nunc ut aliquam aliquam, nisl nibh aliquet nisl, eget aliquam nisl nisl sit amet dolor.",
},
{
id: 5,
src: "../images/gallery/5.png",
alt: "Placeholder image",
title: "Image 5",
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nisl nibh aliquet nisl, eget aliquam nisl nisl sit amet dolor. Sed euismod, nunc ut aliquam aliquam, nisl nibh aliquet nisl, eget aliquam nisl nisl sit amet dolor.",
},
{
id: 6,
src: "../images/gallery/6.png",
alt: "Placeholder image",
title: "Image 6",
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nisl nibh aliquet nisl, eget aliquam nisl nisl sit amet dolor. Sed euismod, nunc ut aliquam aliquam, nisl nibh aliquet nisl, eget aliquam nisl nisl sit amet dolor.",
},
{
id: 7,
src: "../images/gallery/7.png",
alt: "Placeholder image",
title: "Image 7",
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nisl nibh aliquet nisl, eget aliquam nisl nisl sit amet dolor. Sed euismod, nunc ut aliquam aliquam, nisl nibh aliquet nisl, eget aliquam nisl nisl sit amet dolor.",
},
{
id: 8,
src: "../images/gallery/8.png",
alt: "Placeholder image",
title: "Image 8",
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nisl nibh aliquet nisl, eget aliquam nisl nisl sit amet dolor. Sed euismod, nunc ut aliquam aliquam, nisl nibh aliquet nisl, eget aliquam nisl nisl sit amet dolor.",
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