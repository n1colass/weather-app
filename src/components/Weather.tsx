import React, { useState } from 'react';
import UndefinedRequest from './UndefinedRequest';
import WeatherRequest from './WeatherRequest';
import { useGetGeodataQuery } from '../store/geodataAPI';
import { setLoadStatus } from '../store/loadingSlice';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { ELoading } from '../types/WeatherData';
type Props = {
  searchedCity: string;
};

const Weather = ({ searchedCity }: Props) => {
  const dispatch = useAppDispatch();
  const load = useAppSelector((state) => state.load.loadStatus);
  const { data, isSuccess, error } = useGetGeodataQuery(searchedCity, {
    skip: !searchedCity,
  });

  React.useEffect(() => {
    if (data !== undefined) {
      dispatch(setLoadStatus(ELoading.Loading));
    }
  }, [data, isSuccess]);

  return (
    <>
      {error}
      {data !== undefined ? (
        <WeatherRequest coord={data} />
      ) : load === ELoading.First ? (
        <></>
      ) : (
        <UndefinedRequest />
      )}
    </>
  );
};

export default Weather;
