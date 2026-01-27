import Slider from "../common/Slider";

export default function CardSlider() {
  const images = [
    "/highschool/high school (12).jpg",
    "/highschool/high school (13).jpg",
    "/highschool/high school (16).jpg",
    "/highschool/high school (17).jpg",
    "/highschool/high school (18).jpg",
    "/highschool/high school (7).jpg",
    "/highschool/high school (6).jpg",
   
  ];

  return <Slider heading="Our Classes" images={images} />;
}
