import Slider from "../common/Slider";

export default function CardSlider() {
  const images = [
    "/scholarship/Admission.jpg",
    "/scholarship/About US.jpg",
    "/scholarship/Class room (1).jpeg",
    "/scholarship/Class room (3).jpeg",
    "/scholarship/Scholarship Criteria.jpg",
    
  ];

  return <Slider heading="Our Campus" images={images} />;
}
