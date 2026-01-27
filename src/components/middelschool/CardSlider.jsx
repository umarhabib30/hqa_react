import Slider from "../common/Slider";

export default function CardSlider() {
  const images = [
    "/middel/Middle (7).jpg",
    "/middel/Middle (8).jpg",
    "/middel/Middle (3).jpg",
    "/middel/Middle (10).jpg",
  ];

  return <Slider heading="Our Classes" images={images}  />;
}
