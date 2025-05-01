import CountriesData from "../countriesData";
import CountryCard from "./CountryCard";

export default function CountryList({ query, filter }) {
  let countriesList = CountriesData;

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

  return (
    <div className="countries-container">
      {countriesList.map((country, index) => (
        <CountryCard
          key={country.name.common}
          name={country.name.common}
          flag={country.flags.svg}
          population={country.population.toLocaleString("en-IN")}
          region={country.region}
          capital={country.capital?.[0]}
        />
      ))}
    </div>
  );
}
