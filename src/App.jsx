// src/App.jsx
import { useEffect, useState } from 'react';
import './App.css';
import './components/CityButtons.css';
import './components/WeatherCard.css';
import { fetchWeather } from './api/weather';
import SearchBox from './components/SearchBox';

// 한글 도시명을 영문으로 변환하는 매핑 객체
const cityNameMapping = {
  '서울': 'Seoul',
  '부산': 'Busan',
  '인천': 'Incheon',
  '대구': 'Daegu',
  '대전': 'Daejeon',
  '광주': 'Gwangju',
  '울산': 'Ulsan',
  '세종': 'Sejong',
  '수원': 'Suwon',
  '성남': 'Seongnam',
  '용인': 'Yongin',
  '고양': 'Goyang',
  '춘천': 'Chuncheon',
  '강릉': 'Gangneung',
  '청주': 'Cheongju',
  '천안': 'Cheonan',
  '전주': 'Jeonju',
  '목포': 'Mokpo',
  '포항': 'Pohang',
  '창원': 'Changwon',
  '제주': 'Jeju'
};

// 한글 도시명을 영문으로 변환하는 함수
const convertToEnglishCityName = (cityName) => {
  return cityNameMapping[cityName] || cityName;
};

// 도시 버튼 컴포넌트
const CityButtons = ({ onCityClick }) => {
  return (
    <div className="city-buttons-container">
      {Object.keys(cityNameMapping).map((city) => (
        <button
          key={city}
          onClick={() => onCityClick(city)}
          className="city-button"
        >
          {city}
        </button>
      ))}
    </div>
  );
};

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [searchCity, setSearchCity] = useState('서울');

  const handleSearch = async (city) => {
    try {
      const englishCityName = convertToEnglishCityName(city);
      const data = await fetchWeather(englishCityName);
      setWeather(data);
      setSearchCity(city);
      setError(null);
    } catch (err) {
      setError('도시를 찾을 수 없습니다.');
      setWeather(null);
    }
  };

  useEffect(() => {
    handleSearch('서울');
  }, []);

  return (
    <div className="app-container">
      <h1 className="app-title">날씨 앱 ⛅</h1>
      
      <CityButtons onCityClick={handleSearch} />
      
      <SearchBox onSearch={handleSearch} />

      {error && <p className="error-message">{error}</p>}

      {weather ? (
        <div className="weather-card">
          <p className="weather-info">📍 도시: {searchCity}</p>
          <p className="weather-info">🌡️ 온도: {weather.main.temp}°C</p>
          <p className="weather-info">🌥️ 상태: {weather.weather[0].description}</p>
        </div>
      ) : (
        <p className="loading-message">날씨 정보를 불러오는 중...</p>
      )}
    </div>
  );
}

export default App;
