import "./CountryDetailShimmer.css";

export default function CountryDetailShimmer() {
  return (
    <div className="country-details-container shimmer-detail-card">
      <div className="back-button back-button-shimmer"></div>
      <div className="country-details shimmer-country-details">
        <div className="img-shimmer"></div>
        <div className="details-text-container">
          <div className="details-text-container-shimmer"></div>
          <div className="details-text">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="line-shimmer"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
