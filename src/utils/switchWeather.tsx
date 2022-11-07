import { WeatherType } from '../types/WeatherData';
import { WiFog, WiNa } from 'react-icons/wi';
import {
  BsFillSunFill,
  BsCloudsFill,
  BsSnow3,
  BsFillCloudRainHeavyFill,
} from 'react-icons/bs';
import { IoThunderstorm } from 'react-icons/io5';

export const getWeather = (type: WeatherType) => {
  let iconWeather: React.ReactElement;
  switch (type) {
    case WeatherType.Clear:
      iconWeather = <BsFillSunFill style={{ color: '#F4D03F' }} />;
      break;
    case WeatherType.Clouds:
      iconWeather = <BsCloudsFill style={{ color: '#909497' }} />;
      break;
    case WeatherType.Rain:
      iconWeather = <BsFillCloudRainHeavyFill style={{ color: '#1F618D' }} />;
      break;
    case WeatherType.Thunderstorm:
      iconWeather = <IoThunderstorm style={{ color: '#6C3483' }} />;
      break;
    case WeatherType.Mist:
      iconWeather = <WiFog style={{ color: '#7F8C8D' }} />;
      break;
    case WeatherType.Snow:
      iconWeather = <BsSnow3 style={{ color: '#3498DB' }} />;
      break;
    default:
      iconWeather = <WiNa />;
  }
  return iconWeather;
};
