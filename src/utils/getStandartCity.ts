export const getStandartCity = (city: string) => {
  return city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
};
