import React from 'react';
import { getWeatherIcon } from '../utils/getWeatherIcon';

const CurrentWeather = ({ weather, theme }) => {
  const getCardClasses = () => {
    switch (theme) {
      case 'dark':
        return 'bg-gray-800/80 backdrop-blur-lg border border-purple-500/30 shadow-2xl shadow-purple-500/20';
      case 'custom':
        return 'bg-white/10 backdrop-blur-lg border border-pink-300/30 shadow-2xl shadow-pink-500/20';
      default:
        return 'bg-white/20 backdrop-blur-lg border border-white/30 shadow-2xl shadow-blue-500/20';
    }
  };

  return (
    <section className="px-6 mb-8">
      <div className="max-w-4xl mx-auto">
        <div className={`${getCardClasses()} rounded-3xl p-8 transform hover:scale-105 transition-all duration-300`}>
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-2">{weather.name}</h2>
            <p className="text-lg opacity-80 capitalize">{weather.weather[0].description}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-center">
              <div className="mb-4">
                <i className={`${getWeatherIcon(weather.weather[0].icon)} text-6xl text-yellow-400 animate-pulse`}></i>
              </div>
              <div className="text-6xl font-bold mb-2">{Math.round(weather.main.temp)}°C</div>
              <div className="text-lg opacity-80">Hissedilen: {Math.round(weather.main.feels_like)}°C</div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <i className="fas fa-tint text-blue-400 text-2xl mb-2"></i>
                <div className="text-sm opacity-70">Nem</div>
                <div className="text-xl font-semibold">{weather.main.humidity}%</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <i className="fas fa-wind text-green-400 text-2xl mb-2"></i>
                <div className="text-sm opacity-70">Rüzgar</div>
                <div className="text-xl font-semibold">{Math.round(weather.wind.speed)} km/h</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <i className="fas fa-thermometer-half text-red-400 text-2xl mb-2"></i>
                <div className="text-sm opacity-70">Basınç</div>
                <div className="text-xl font-semibold">{weather.main.pressure} hPa</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <i className="fas fa-eye text-purple-400 text-2xl mb-2"></i>
                <div className="text-sm opacity-70">Görüş</div>
                <div className="text-xl font-semibold">{Math.round(weather.visibility / 1000)} km</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentWeather;