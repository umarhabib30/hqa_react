import GallerySection from "../common/GallerySection";
const Gallery = () => {
  const athleticsImages = [
    "/athelatics/athletic (22).jpeg",
    "/athelatics/athletic (4).jpeg",
    "/athelatics/athletic (6).jpeg",
    "/athelatics/athletic (7).jpeg",
    "/athelatics/athletic (29).jpeg",
    "/athelatics/athletics (1).jpg",
    "/athelatics/athletic (5).jpeg",
    "/athelatics/athletic (2).jpeg",
    "public/athelatics/athletic (15).jpeg",
    "/athelatics/athletic (28).jpeg",
    "/athelatics/athletic (3).jpeg",
    "/athelatics/athletic (29).jpeg",
    "/athelatics/athletic (5).jpeg",
    "/athelatics/athletic (13).jpeg",
    "/athelatics/athletic (2).jpeg",
  ];

  return <GallerySection heading="Our Gallery " images={athleticsImages} />;
};

export default Gallery;
