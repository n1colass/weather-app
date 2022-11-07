import React from 'react';
import axios from 'axios';
import { ELoading, WeatherObject } from '../types/WeatherData';
import { kelvinToCelsius } from '../utils/convertDegree';
import { getWeather } from '../utils/switchWeather';
import { getStandartCity } from '../utils/getStandartCity';
import WeatherInfo from './WeatherInfo';
type Props = {
  coord: {
    lat: string;
    lon: string;
  };
  searchedCity: string;
};

const WeatherRequest = ({ coord, searchedCity }: Props) => {
  const [weather, setWeather] = React.useState<WeatherObject>();
  const [isLoading, setIsLoading] = React.useState<ELoading>(ELoading.First);
  React.useEffect(() => {
    if (coord.lat !== '') {
      setIsLoading(ELoading.Loading);
      const API_WEATHER = `https://api.openweathermap.org/data/2.5/weather?lat=${coord.lat}&lon=${coord.lon}&appid=4eb5a203233a2f2be4a5629792991f75`;
      axios
        .get(API_WEATHER)
        .then((response) => {
          const data = response.data;
          setWeather({
            location: {
              name: getStandartCity(searchedCity),
              country: data.sys.country,
            },
            temperature: {
              now: kelvinToCelsius(data.main.temp),
              feels: kelvinToCelsius(data.main.feels_like),
              max: kelvinToCelsius(data.main.temp_max),
              min: kelvinToCelsius(data.main.temp_min),
            },
            humidity: data.main.humidity,
            general: data.weather[0].main,
            imageWeather: getWeather(data.weather[0].main),
          });
          setIsLoading(ELoading.Final);
        })
        .catch((error) => console.error(error));
    }
  }, [coord]);
  return (
    <>
      {isLoading === ELoading.First ? (
        <></>
      ) : isLoading === ELoading.Loading ? (
        <div className="mt-10 text-center">
          <p>Loading...</p>
        </div>
      ) : (
        <WeatherInfo weather={weather} />
      )}
    </>
  );
};

export default WeatherRequest;
