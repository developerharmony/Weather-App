import React from 'react';
import { formatDate } from '../utils/formatDate';
import { getWeatherIcon } from '../utils/getWeatherIcon';

const Forecast = ({ forecast, theme }) => {
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
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-center mb-6">5 Günlük Tahmin</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {forecast.list
            .filter((_, index) => index % 8 === 0)
            .slice(0, 5)
            .map((item, index) => (
              <div
                key={index}
                className={`${getCardClasses()} rounded-2xl p-6 text-center transform hover:scale-105 Nomek
                transition-all duration-300 hover:shadow-2xl`}
              >
                <div className="text-sm opacity-70 mb-2">{formatDate(item.dt)}</div>
                <div className="mb-3">
                  <i className={`${getWeatherIcon(item.weather[0].icon)} text-3xl text-yellow-400`}></i>
                </div>
                <div className="text-2xl font-bold mb-1">{Math.round(item.main.temp)}°C</div>
                <div className="text-xs opacity-70 capitalize mb-2">{item.weather[0].description}</div>
                <div className="flex justify-between text-xs opacity-60">
                  <span>
                    <i className="fas fa-tint mr-1"></i>
                    {item.main.humidity}%
                  </span>
                  <span>
                    <i className="fas fa-wind mr-1"></i>
                    {Math.round(item.wind.speed)}km/h
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Forecast;