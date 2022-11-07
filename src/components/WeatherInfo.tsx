import React from 'react';
import { WeatherObject } from '../types/WeatherData';
interface Props {
  weather: WeatherObject | undefined;
}

const WeatherInfo = ({ weather }: Props) => {
  return (
    <div className="flex w-full h-auto mt-3 rounded bg-slate-100">
      <section className="flex flex-col w-2/5 h-full sm:w-1/2">
        <div className="w-fit ml-10 pt-5 sm:ml-6 sm:pt-6">
          <p className=" text-[85px] sm:text-[75px]">{weather?.imageWeather}</p>
        </div>
        <p className="mt-3 ml-4 font-semibold italic text-xl text-slate-600">
          {weather?.location.name},{weather?.location.country}
        </p>
        <p className="ml-4 font-medium text-sm text-slate-500">
          {weather?.general}
        </p>
        <p className="ml-4 mb-2 font-medium text-sm text-slate-500">
          Humidity: {weather?.humidity}%
        </p>
      </section>
      <section className="flex flex-col w-3/5 h-full sm:w-1/2">
        <p className="mx-auto mt-12 text-7xl text-slate-700 before:sm:text-6xl sm:mt-16">
          {weather?.temperature.now}
          <sup>°C</sup>
        </p>
        <div className="w-10/12 h-1 ml-auto mr-7 mb-1 bg-slate-700 "></div>
        <div className="flex gap-2 ml-auto mr-7 sm:gap-0 sm:mr-3">
          <p className="text-[12px] text-slate-700 sm:text-[10px]">
            feels like: {weather?.temperature.feels}
            <sup>°</sup>
          </p>
          <p className="text-[12px] text-slate-700 sm:text-[10px]">
            min: {weather?.temperature.min}
            <sup>°</sup>
          </p>
          <p className="text-[12px] text-slate-700 sm:text-[10px]">
            max: {weather?.temperature.max}
            <sup>°</sup>
          </p>
        </div>
      </section>
    </div>
  );
};

export default WeatherInfo;
