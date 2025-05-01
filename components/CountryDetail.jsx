import { useEffect, useState } from "react";

import "./CountryDetail.css";
import { useParams } from "react-router-dom";

export default function CountryDetail() {
  // const countryName = new URLSearchParams(location.search).get("name");
  const params = useParams();
  const countryName = params.country;
  const [countryData, setCountryData] = useState();
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetchCountryDetails();
  }, []);

  function fetchCountryDetails() {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        setCountryData({
          name: data.name.common,
          nativeName: Object.values(data.name.nativeName)[0].common,
          population: data.population.toLocaleString("en-IN"),
          region: data.region,
          subregion: data.subregion,
          capital: data.capital.join(", "),
          tld: data.tld.join(", "),
          currency: Object.values(data.currencies)
            .map((currency) => currency.name)
            .join(", "),
          language: Object.values(data.languages).join(", "),
          flag: data.flags.svg,
        });
        console.log(data);
      })
      .catch((error) => {
        setNotFound(true);
      });
  }

  if (notFound) return <div>Country not found</div>;

  if (!countryData) return <h3>Loading...</h3>;

  return (
    <main>
      <div className="country-details-container">
        <span className="back-button" onClick={() => history.back()}>
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        <div className="country-details">
          <img src={countryData?.flag} alt={countryData?.name} />
          <div className="details-text-container">
            <h1>{countryData?.name}</h1>
            <div className="details-text">
              <p>
                <b>Native Name: </b>
                <span className="native-name">{countryData?.nativeName}</span>
              </p>
              <p>
                <b>Population: </b>
                <span className="population">{countryData?.population}</span>
              </p>
              <p>
                <b>Region: </b>
                <span className="region">{countryData?.region}</span>
              </p>
              <p>
                <b>Sub Region: </b>
                <span className="sub-region">{countryData?.subregion}</span>
              </p>
              <p>
                <b>Capital: </b>
                <span className="capital">{countryData?.capital}</span>
              </p>
              <p>
                <b>Top Level Domain: </b>
                <span className="top-level-domain">{countryData?.tld}</span>
              </p>
              <p>
                <b>Currencies: </b>
                <span className="currencies">{countryData?.currency}</span>
              </p>
              <p>
                <b>Languages: </b>
                <span className="languages">{countryData?.language}</span>
              </p>
            </div>
            <div className="border-countries">
              <b>Border Countries: </b>&nbsp;
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
