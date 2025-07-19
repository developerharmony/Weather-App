import { useState, useEffect, useCallback } from 'react';

export const useWeather = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [locationPrompt, setLocationPrompt] = useState(true); // Konum izni durumu
  const API_KEY = process.env.REACT_APP_API_KEY || 'your-api-key-here';

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const getCurrentLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchWeatherByCoords(position.coords.latitude, position.coords.longitude);
          setLocationPrompt(false); // Konum alındı, mesajı gizle
        },
        () => {
          setLocationPrompt(true); // Konum izni reddedildi, mesaj göster
          setError('Konum izni reddedildi. Lütfen bir şehir seçin.');
        },
      );
    } else {
      setLocationPrompt(true); // Geolocation desteklenmiyor, mesaj göster
      setError('Konum servisi desteklenmiyor. Lütfen bir şehir seçin.');
    }
  }, []);

  const fetchWeatherByCoords = useCallback(async (lat, lon) => {
    setLoading(true);
    setError('');
    try {
      const [weatherResponse, forecastResponse] = await Promise.all([
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=tr`
        ),
        fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=tr`
        ),
      ]);
      if (!weatherResponse.ok || !forecastResponse.ok) {
        throw new Error('Hava durumu verileri alınamadı');
      }
      const weatherData = await weatherResponse.json();
      const forecastData = await forecastResponse.json();
      setCurrentWeather(weatherData);
      setForecast(forecastData);
      setLocationPrompt(false);
    } catch (err) {
      setError('Hava durumu verileri yüklenirken bir hata oluştu');
      setLocationPrompt(true);
    } finally {
      setLoading(false);
    }
  }, [API_KEY]);

  const fetchWeatherByCity = useCallback(async (city) => {
    setLoading(true);
    setError('');
    try {
      const [weatherResponse, forecastResponse] = await Promise.all([
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=tr`
        ),
        fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=tr`
        ),
      ]);
      if (!weatherResponse.ok || !forecastResponse.ok) {
        throw new Error('Şehir bulunamadı');
      }
      const weatherData = await weatherResponse.json();
      const forecastData = await forecastResponse.json();
      setCurrentWeather(weatherData);
      setForecast(forecastData);
      setLocationPrompt(false); // Şehir seçildi, mesajı gizle
    } catch (err) {
      setError('Şehir bulunamadı veya hava durumu verileri alınamadı');
      setLocationPrompt(true);
    } finally {
      setLoading(false);
    }
  }, [API_KEY]);

  return { currentWeather, forecast, loading, error, fetchWeatherByCity, fetchWeatherByCoords, locationPrompt };
};