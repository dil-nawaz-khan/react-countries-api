import { Link } from "react-router-dom";

export default function CountryCard({
  name,
  flag,
  population,
  region,
  capital,
  data,
}) {
  return (
    <Link to={`/${name}`} state={data} className="country-card">
      <img src={flag} alt={`${name} flag`} />
      <div className="card-text">
        <h3 className="card-title">{name}</h3>
        <p>
          <b>Population: </b> {population}
        </p>
        <p>
          <b>Region: </b> {region}
        </p>
        <p>
          <b>Capital: </b> {capital ?? "N/A"}
        </p>
      </div>
    </Link>
  );
}
