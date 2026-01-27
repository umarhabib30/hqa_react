import GallerySection from "../common/GallerySection";
const Gallery = () => {
  const athleticsImages = [
    "/donation/g1.jpg",
    "/donation/g2.jpg",
    "/donation/g3.jpg",
    "/donation/g4.jpg",
    "/donation/g5.jpg",
    "/donation/g4.jpg",
    "/donation/g6.jpg",
    "/donation/g2.jpg",
    "/donation/g4.jpg",
    "/donation/g6.jpg",
    "/donation/g1.jpg",
    "/donation/g2.jpg",
    "/donation/g3.jpg",
    "/donation/g4.jpg",
    "/donation/g5.jpg",
  ];

  return (
    <GallerySection
      heading="2025 Ramadan Fundraiser: Moments to Cherish "
      images={athleticsImages}
    />
  );
};

export default Gallery;

// import React, { useEffect, useState } from "react";
// import GallerySection from "../common/GallerySection";

// const Gallery = () => {
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     fetch("https://hquranacademy.com/api/donationGalleries")
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.status && data.data.length) {
//           const galleryImages = data.data[0].images.map(
//             (img) => `https://hquranacademy.com/storage/${img}`
//           );
//           setImages(galleryImages);
//         }
//       })
//       .catch((err) => console.error("Donation Gallery API Error:", err));
//   }, []);

//   return (
//     <GallerySection
//       heading="2025 Ramadan Fundraiser: Moments to Cherish"
//       images={images}
//     />
//   );
// };

// export default Gallery;
