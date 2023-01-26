import { useState } from "react";
import { GEO_API_URL, geoApiOptions } from "../../api.js";
const { AsyncPaginate } = require("react-select-async-paginate");

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            }
          })
        }
      })
      .catch((err) => console.error(err));
  };

  const handleOnChange = (dataSearch) => {
    setSearch(dataSearch);
    onSearchChange(dataSearch);
  };

  return (
    <AsyncPaginate
      placeholder="Search for a city"
      debounceTimeout={600} //limit the rate of execution of a particular function
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions} //load properties in a async request. for example, we search for london, type in "lond" and its search this api with that prefix
    />
  );
};

export default Search;
