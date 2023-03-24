import React, { useState } from 'react';

const WeatherDataContext = React.createContext(null);

export const WeatherDataProvider = ({ children }:any) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  return (
    <WeatherDataContext.Provider value={{ weatherData, setWeatherData }}>
      {children}
    </WeatherDataContext.Provider>
  );
};

export default WeatherDataContext;
