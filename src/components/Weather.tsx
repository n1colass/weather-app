import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UndefinedRequest from './UndefinedRequest';
import WeatherRequest from './WeatherRequest';

type Props = {
  searchedCity: string;
};

const Weather = ({ searchedCity }: Props) => {
  const API_GEODATA = `http://api.openweathermap.org/geo/1.0/direct?q=${searchedCity}&limit=1&appid=4eb5a203233a2f2be4a5629792991f75`;
  const [coord, setCoord] = useState({ lat: '', lon: '' });
  const [undefinedStatus, setUndefinedStatus] = useState(false);
  useEffect(() => {
    if (searchedCity.length) {
      axios
        .get(API_GEODATA)
        .then((response) => {
          const data = response.data[0];
          if (data === undefined) {
            setUndefinedStatus(true);
          }
          if (data !== undefined) {
            setUndefinedStatus(false);
            setCoord({ lat: data.lat.toFixed(2), lon: data.lon.toFixed(2) });
          }
        })
        .catch((error) => console.error(error));
    }
  }, [API_GEODATA, searchedCity]);

  return (
    <>
      {undefinedStatus === false ? (
        <WeatherRequest searchedCity={searchedCity} coord={coord} />
      ) : (
        <UndefinedRequest />
      )}
    </>
  );
};

export default Weather;
