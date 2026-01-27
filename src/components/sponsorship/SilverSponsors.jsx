import SponsorSection from "../common/SponsorSection";

export default function SilverSponsors({ images }) {
  if (!images.length) return null;

  return (
    <SponsorSection
      level="Silver"
      amount="$3,000"
      images={images}
      gridCols={4}
      iconImage="/sponsorship/silver.png"
    />
  );
}
