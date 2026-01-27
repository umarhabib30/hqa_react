import Slider from "../common/Slider";

export default function CardSlider() {
  const images = [
    "/academics/campus (4).jpg",
    "/academics/campus (7).jpg",
    "/academics/campus (6).jpg",
    "/academics/campus (5).jpg",
    "/academics/campus (3).jpg",
    "/academics/campus (2).jpg",
    "/academics/campus (1).jpg",
    
  ];

  return <Slider heading="Our Campus" images={images} />;
}
