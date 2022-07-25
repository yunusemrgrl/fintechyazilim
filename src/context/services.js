import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';

const CountriesContext = createContext();

export const CountriesProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const [countries, setCountries] = useState('');

  const fetchApiData = async () => {
    const response = await axios('https://restcountries.com/v2/all');
    console.log(response.data);
  };

  useEffect(() => {
    fetchApiData();
  }, []);
  //localstorage'den almak daha güzel olur

  const value = { setTheme };

  return (
    <CountriesContext.Provider value={value}>
      {children}
    </CountriesContext.Provider>
  );
};

export const useCountries = () => useContext(CountriesContext);
