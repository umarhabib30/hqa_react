import Slider from "../common/Slider";

export default function CardSlider() {
  const images = [
    "/admission/t1.jpg",
    "/academics/cs1.jpg",
    "/admission/t1.jpg",
    "/academics/cs1.jpg",
    "/admission/t1.jpg",
    "/academics/cs1.jpg",
    "/admission/t1.jpg",
    "/academics/cs1.jpg",
    "/admission/t1.jpg",
    "/academics/cs1.jpg",
  ];

  return <Slider heading="Our Classes" images={images} />;
}
