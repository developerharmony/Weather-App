import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import TemperatureChart from './components/TemperatureChart';
import Footer from './components/Footer';
import { useWeather } from './hooks/useWeather';
import { useTheme } from './hooks/useTheme';
import './styles/index.css';

const App = () => {
  const { currentWeather, forecast, loading, error, fetchWeatherByCity, fetchWeatherByCoords, locationPrompt } = useWeather();
  const { theme, changeTheme, getThemeClasses } = useTheme();

  return (
    <div className={`flex flex-col min-h-screen transition-all duration-500 ${getThemeClasses()}`}>
      <Header theme={theme} changeTheme={changeTheme} />
      <main className="flex-1">
        <SearchBar fetchWeatherByCity={fetchWeatherByCity} />
        {locationPrompt && !loading && !currentWeather && (
          <div className="px-6 mb-6">
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-white/10 border border-white/30 rounded-xl p-4 backdrop-blur-lg">
                <div className="flex items-center justify-center">
                  <i className="fas fa-city text-blue-400 mr-3 text-lg"></i>
                  <span className="text-lg text-white">Lütfen bir şehir seçiniz</span>
                </div>
              </div>
            </div>
          </div>
        )}
        {error && !locationPrompt && (
          <div className="px-6 mb-6">
            <div className="max-w-2xl mx-auto">
              <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-4 backdrop-blur-lg">
                <div className="flex items-center">
                  <i className="fas fa-exclamation-triangle text-red-400 mr-3"></i>
                  <span className="text-red-200">{error}</span>
                </div>
              </div>
            </div>
          </div>
        )}
        {loading && (
          <div className="px-6 mb-6">
            <div className="max-w-2xl mx-auto text-center">
              <div className="inline-flex items-center space-x-3">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                <span className="text-lg">Hava durumu yükleniyor...</span>
              </div>
            </div>
          </div>
        )}
        {currentWeather && <CurrentWeather weather={currentWeather} theme={theme} />}
        {forecast && <Forecast forecast={forecast} theme={theme} />}
        {forecast && <TemperatureChart forecast={forecast} theme={theme} />}
      </main>
      <Footer fetchWeatherByCity={fetchWeatherByCity} theme={theme} />
    </div>
  );
};

export default App;