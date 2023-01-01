import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Geodata, GeodataExtend } from '../types/Geodata';
import { kelvinToCelsius } from '../utils/convertDegree';
import { getWeatherImage } from '../utils/switchWeather';
import { getStandartCity } from '../utils/getStandartCity';

export const geodataAPI = createApi({
  reducerPath: 'geodataAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://api.openweathermap.org' }),
  endpoints: (build) => ({
    getGeodata: build.query({
      query: (name: string) =>
        `/geo/1.0/direct?q=${name}&limit=1&appid=4eb5a203233a2f2be4a5629792991f75`,
      transformResponse: (response: [Geodata], meta, arg) => {
        const data = response[0];
        if (data === undefined) return data;
        return {
          lat: parseFloat(data.lat.toFixed(2)),
          lon: parseFloat(data.lon.toFixed(2)),
          searchedCity: arg,
        };
      },
    }),
    getWeather: build.query({
      query: (geo: GeodataExtend) =>
        `/data/2.5/weather?lat=${geo.lat}&lon=${geo.lon}&appid=4eb5a203233a2f2be4a5629792991f75`,
      transformResponse: (response: any, meta, arg) => {
        if (response === undefined) return response;
        return {
          location: {
            name: getStandartCity(arg.searchedCity),
            country: response.sys.country,
          },
          temperature: {
            now: kelvinToCelsius(response.main.temp),
            feels: kelvinToCelsius(response.main.feels_like),
            max: kelvinToCelsius(response.main.temp_max),
            min: kelvinToCelsius(response.main.temp_min),
          },
          humidity: response.main.humidity,
          general: response.weather[0].main,
          imageWeather: getWeatherImage(response.weather[0].main),
        };
      },
    }),
  }),
});

export const { useGetGeodataQuery, useGetWeatherQuery } = geodataAPI;
