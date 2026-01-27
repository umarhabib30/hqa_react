import SponsorSection from "../common/SponsorSection";

export default function PremiumSponsors({ images }) {
  if (!images.length) return null;

  return (
    <SponsorSection
      level="Premium"
      amount="$5,000"
      images={images}
      gridCols={4}
      iconImage="/sponsorship/premium.png"
    />
  );
}
