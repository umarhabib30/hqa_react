import React, { useEffect, useState } from "react";
import GallerySection from "../common/GallerySection";

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://hquranacademy.com/api/alumniGalleries")
      .then((res) => res.json())
      .then((data) => {
        if (data.status && data.data.length) {
          const galleryImages = data.data[0].images.map(
            (img) => `https://hquranacademy.com/storage/${img}`,
          );
          setImages(galleryImages);
        }
      })
      .catch((err) => console.error("Gallery API Error:", err));
  }, []);

  return <GallerySection heading="Our Gallery" images={images} />;
};

export default Gallery;
