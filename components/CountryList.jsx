import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import CountryListShimmer from "./CountryListShimmer";

export default function CountryList({ query, filter }) {
  const [countriesData, setCountriesData] = useState([]);
  let countriesList = countriesData;

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      });
  }

  if (query.length > 0) {
    countriesList = countriesList.filter((country) =>
      country.name.common.toLowerCase().includes(query.toLowerCase())
    );
  }

  if (filter.toLowerCase() !== "clear" && filter.length > 0) {
    countriesList = countriesList.filter((country) =>
      country.region.toLowerCase().includes(filter.toLowerCase())
    );
  }

  if (!countriesList.length) return <CountryListShimmer />;

  return (
    <div className="countries-container">
      {countriesList.map((country) => (
        <CountryCard
          key={country.name.common}
          name={country.name.common}
          flag={country.flags.svg}
          population={country.population.toLocaleString("en-IN")}
          region={country.region}
          capital={country.capital?.[0]}
          data={country}
        />
      ))}
    </div>
  );
}
