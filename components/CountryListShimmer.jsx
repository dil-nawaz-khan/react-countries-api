import "./CountryListShimmer.css";

export default function CountryListShimmer() {
  return (
    <div className="countries-container">
      {/* new Array(10).fill('') */}
      {Array.from({ length: 10 }).map((_, index) => (
        <div className="country-card shimmer-card" key={index}></div>
      ))}
    </div>
  );
}
