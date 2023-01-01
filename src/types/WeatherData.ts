import React from 'react';

export const enum WeatherType {
  Clear = 'Clear',
  Clouds = 'Clouds',
  Rain = 'Rain',
  Drizzle = 'Drizzle',
  Thunderstorm = 'Thunderstorm',
  Mist = 'Mist',
  Fog = 'Fog',
  Snow = 'Snow',
}

export interface WeatherObject {
  location: { name: string; country: string };
  temperature: { now: number; feels: number; max: number; min: number };
  humidity: string;
  general: WeatherType;
  imageWeather: React.ReactElement;
}

export const enum ELoading {
  First,
  Loading,
  Final,
}
