import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';

const CountriesContext = createContext();

export const CountriesProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [capital, setCapital] = useState(false);
  const fetchApiData = async () => {
    try {
      setLoading(true);
      const response = await axios('https://restcountries.com/v2/all');

      setCountries(response.data);
      setFilteredCountries(response.data);
      setLoading(false);
      console.log(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  useEffect(() => {
    if (capital) {
      if (countries) {
        setFilteredCountries(
          countries.filter((country) => {
            if (
              country.capital &&
              country.capital.toLowerCase().includes(search.toLocaleLowerCase())
            ) {
              return country;
            }
            return null;
          }),
        );
      }
    } else {
      if (countries) {
        setFilteredCountries(
          countries.filter((country) => {
            if (
              country.capital &&
              JSON.stringify(country)
                .toLowerCase()
                .includes(search.toLocaleLowerCase())
            ) {
              console.log(country);
              return country;
            }
            return null;
          }),
        );
      }
    }
  }, [search, capital, countries]);

  //localstorage'den almak daha güzel olur

  const value = {
    countries,
    search,
    setSearch,
    filteredCountries,
    loading,
    capital,
    setCapital,
  };

  return (
    <CountriesContext.Provider value={value}>
      {children}
    </CountriesContext.Provider>
  );
};

export const useCountries = () => useContext(CountriesContext);
