import Slider from "../common/Slider";

export default function CardSlider() {
  const images = [
    "/elementary/Our classes 2.JPG",
    "/elementary/Our classes 3.JPG",
    "/elementary/Our classes 4.JPG",
    "/elementary/element (9).jpg",
    "/elementary/Our classes.JPG",   
  ];

  return <Slider heading="Our Classes" images={images} />;
}
