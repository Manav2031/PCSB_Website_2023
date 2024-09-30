import React from "react";
import "../styles/gallery.css";

const Gallery = () => {
  return (
    <div class="wrapper p-6">
      <div class="images grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <img src="GalleryImg/image1.jpg" class="w-full h-auto" alt="Image 1" />
        <img src="GalleryImg/image2.jpg" class="w-full h-auto" alt="Image 2" />
        <img src="GalleryImg/image3.jpg" class="w-full h-auto" alt="Image 3" />
        <img src="GalleryImg/image4.jpg" class="w-full h-auto" alt="Image 4" />
        <img src="GalleryImg/image5.jpg" class="w-full h-auto" alt="Image 5" />
        <img
          src="GalleryImg/image6.jpg"
          class="w-full h-[345px]"
          alt="Image 6"
        />
        <img src="GalleryImg/Party.jpeg" class="w-full h-auto" alt="Image 7" />
        <img
          src="GalleryImg/Xenia.jpeg"
          class="w-full h-[345px]"
          alt="Image 8"
        />
      </div>
    </div>
  );
};

export default Gallery;
