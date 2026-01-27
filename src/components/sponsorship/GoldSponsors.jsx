import SponsorSection from "../common/SponsorSection";

export default function GoldSponsors({ images }) {
  if (!images.length) return null;

  return (
    <SponsorSection
      level="Gold"
      amount="$10,000"
      images={images}
      gridCols={5}
      iconImage="/sponsorship/gold.png"
    />
  );
}
