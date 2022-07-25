import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';

const CountriesContext = createContext();

export const CountriesProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const [countries, setCountries] = useState('');
  const [filteredCapital, setFilteredCapital] = useState('');
  const fetchApiData = async () => {
    try {
      const response = await axios('https://restcountries.com/v2/all');
      setCountries(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  //localstorage'den almak daha güzel olur

  const value = { setTheme, countries, setFilteredCapital, filteredCapital };

  return (
    <CountriesContext.Provider value={value}>
      {children}
    </CountriesContext.Provider>
  );
};

export const useCountries = () => useContext(CountriesContext);
