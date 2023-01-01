import React from 'react';
import WeatherInfo from './WeatherInfo';
import { ELoading } from '../types/WeatherData';
import { useGetWeatherQuery } from '../store/geodataAPI';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { setLoadStatus } from '../store/loadingSlice';

type Props = {
  coord: {
    lat: number;
    lon: number;
    searchedCity: string;
  };
};

const WeatherRequest = ({ coord }: Props) => {
  const dispatch = useAppDispatch();
  const load = useAppSelector((state) => state.load.loadStatus);
  const { data, isSuccess } = useGetWeatherQuery(coord, {
    skip: !coord,
  });
  React.useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        dispatch(setLoadStatus(ELoading.Final));
      }, 300);
    }
  }, [isSuccess, coord]);
  return (
    <>
      {load === ELoading.Final && isSuccess === true ? (
        <WeatherInfo weather={data} />
      ) : (
        <div className="mt-10 text-center">
          <p>Loading...</p>
        </div>
      )}
    </>
  );
};

export default WeatherRequest;
