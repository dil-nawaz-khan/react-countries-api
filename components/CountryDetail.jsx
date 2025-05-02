import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";

import "./CountryDetail.css";
import CountryDetailShimmer from "./CountryDetailShimmer";

export default function CountryDetail() {
  // const countryName = new URLSearchParams(location.search).get("name");
  const params = useParams();
  const countryName = params.country;
  const [countryData, setCountryData] = useState();
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetchCountryDetails();
  }, [countryName]);

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
          borders: [],
        });

        if (data.borders) {
          Promise.all(
            data.borders.map((border) => {
              return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
                .then((res) => res.json())
                .then(([data]) => data.name.common);
            })
          ).then((borders) => {
            setCountryData((prev) => ({
              ...prev,
              borders,
            }));
          });
        }
      })
      .catch((error) => {
        console.log(error);
        setNotFound(true);
      });
  }

  if (notFound) return <div>Country not found</div>;

  if (!countryData) return <CountryDetailShimmer />;

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
            {countryData?.borders.length !== 0 && (
              <div className="border-countries">
                <b>Border Countries: </b>&nbsp;
                {countryData?.borders.map((border) => (
                  <Link to={`/${border}`} key={border}>
                    {border}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
