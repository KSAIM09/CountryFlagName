import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CountryCards.css';

const CountryCards = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        setCountries(response.data);
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="country-cards">
      {loading ? (
        <p>Loading...</p>
      ) : countries.length === 0 ? (
        <p>No data available</p>
      ) : (
        countries.map((country) => (
          <div key={country.cca2} className="country-card">
            <img src={country.flags.svg} alt={`${country.name.common} Flag`} />
            <h3>{country.name.common}</h3>
          </div>
        ))
      )}
    </div>
  );
};

export default CountryCards;
