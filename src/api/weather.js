// src/api/weather.js
const API_KEY = 'e8b788f347d1f28ab1bb91b0b71666be';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export async function fetchWeather(city) {
  const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=kr`);
  if (!response.ok) {
    throw new Error('날씨 정보를 가져오지 못했습니다.');
  }
  const data = await response.json();
  return data;
}
