import React, { useState, useEffect } from "react";
import { defaultCities } from "../utils/constants";

const SearchBar = ({ fetchWeatherByCity }) => {
  const [searchCity, setSearchCity] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => {
    const savedHistory = JSON.parse(
      localStorage.getItem("searchHistory") || "[]"
    );
    setSearchHistory(savedHistory);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchCity.trim()) {
      fetchWeatherByCity(searchCity.trim());
      if (!searchHistory.includes(searchCity.trim())) {
        const newHistory = [searchCity.trim(), ...searchHistory.slice(0, 4)];
        setSearchHistory(newHistory);
        localStorage.setItem("searchHistory", JSON.stringify(newHistory));
      }
      setSearchCity("");
      setShowHistory(false);
    }
  };

  const handleHistoryClick = (city) => {
    fetchWeatherByCity(city);
    setSearchCity("");
    setShowHistory(false);
  };

  const handleDeleteHistoryItem = (city) => {
    const updatedHistory = searchHistory.filter((item) => item !== city);
    setSearchHistory(updatedHistory);
    localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
  };

  const handleClearHistory = () => {
    setSearchHistory([]);
    localStorage.setItem("searchHistory", JSON.stringify([]));
  };

  return (
    <section className="px-6 py-8">
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSearch} className="relative">
          <div className="relative">
            <input
              type="text"
              value={searchCity}
              onChange={(e) => setSearchCity(e.target.value)}
              onFocus={() => setShowHistory(true)}
              placeholder="Şehir adı girin..."
              className="w-full px-6 py-4 pl-12 pr-16 text-lg bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent placeholder-white/70 text-white"
              aria-label="Şehir ara"
            />
            <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 text-lg"></i>
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 !rounded-button whitespace-nowrap cursor-pointer"
              aria-label="Ara"
            >
              <i className="fas fa-arrow-right text-white"></i>
            </button>
          </div>
          {showHistory && searchHistory.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white/10 backdrop-blur-lg border border-white/30 rounded-xl z-50 max-h-60 overflow-y-auto">
              <div className="p-2">
                <div className="flex justify-between items-center px-3 py-2">
                  <p className="text-sm opacity-70">Son Aramalar</p>
                  <button
                    onClick={handleClearHistory}
                    className="text-sm text-red-400 hover:text-red-300 transition-colors cursor-pointer"
                    aria-label="Tüm arama geçmişini temizle"
                  >
                    Tümünü Temizle
                  </button>
                </div>
                {searchHistory.map((city, index) => (
                  <div
                    key={`history-${index}`}
                    className="flex justify-between items-center w-full px-3 py-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <button
                      onClick={() => handleHistoryClick(city)}
                      className="flex-1 text-left"
                      aria-label={`Şehir seç: ${city}`}
                    >
                      <i className="fas fa-history mr-2 opacity-50"></i>
                      {city}
                    </button>
                    <button
                      onClick={() => handleDeleteHistoryItem(city)}
                      className="ml-2 text-red-400 hover:text-red-300 transition-colors"
                      aria-label={`${city} şehrini arama geçmişinden sil`}
                    >
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </form>
        <div className="mt-6 flex flex-wrap gap-2 justify-center">
          {defaultCities.slice(0, 6).map((city) => (
            <button
              key={city}
              onClick={() => fetchWeatherByCity(city)}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm transition-all duration-300 backdrop-blur-lg !rounded-button whitespace-nowrap cursor-pointer"
              aria-label={`Şehir seç: ${city}`}
            >
              {city}
            </button>
          ))}
        </div>
      </div>
      {showHistory && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setShowHistory(false)}
        ></div>
      )}
    </section>
  );
};

export default SearchBar;
