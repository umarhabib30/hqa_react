import Slider from "../common/Slider";

export default function CardSlider() {
  const images = [
    "/pre/Our classes.jpeg",
    "/pre/Our classes 2.jpeg",
    "/pre/Our classes 3.jpeg",
    "/pre/pre (8).jpg",
    "/pre/pre (7).jpg",
    
  ];

  return <Slider heading="Our Classes" images={images} />;
}
