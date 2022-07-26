import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';

const CountriesContext = createContext();

export const CountriesProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [search, setSearch] = useState('');
  const fetchApiData = async () => {
    try {
      setLoading(true);
      const response = await axios('https://restcountries.com/v2/all');
      setCountries(response.data);
      setFilteredCountries(response.data);
      setLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  useEffect(() => {
    if (countries) {
      setFilteredCountries(
        countries.filter((country) => {
          if (
            country.capital &&
            country.capital.toLowerCase().includes(search.toLocaleLowerCase())
          ) {
            return country;
          }
        }),
      );
    }
  }, [search]);

  //localstorage'den almak daha güzel olur

  const value = {
    setTheme,
    countries,
    search,
    setSearch,
    filteredCountries,
    loading,
  };

  return (
    <CountriesContext.Provider value={value}>
      {children}
    </CountriesContext.Provider>
  );
};

export const useCountries = () => useContext(CountriesContext);
