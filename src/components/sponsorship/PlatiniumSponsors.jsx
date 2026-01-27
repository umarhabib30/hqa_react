import SponsorSection from "../common/SponsorSection";

export default function PlatinumSponsors({ images }) {
  if (!images.length) return null;

  return (
    <SponsorSection
      level="Platinum"
      amount="$25,000"
      images={images}
      gridCols={5}
      iconImage="/sponsorship/platinium.png"
    />
  );
}
