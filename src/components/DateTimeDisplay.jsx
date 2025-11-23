// src/components/DateTimeDisplay.jsx
import { useEffect, useState } from 'react';

const DateTimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const days = ['일', '월', '화', '수', '목', '금', '토'];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const year = currentTime.getFullYear();
  const month = String(currentTime.getMonth() + 1).padStart(2, '0');
  const day = String(currentTime.getDate()).padStart(2, '0');

  const weekday = days[currentTime.getDay()];

  const hour = String(currentTime.getHours()).padStart(2, '0');
  const minute = String(currentTime.getMinutes()).padStart(2, '0');
  const second = String(currentTime.getSeconds()).padStart(2, '0');

  return (
    <p className="current-time">
      {/* 날짜 */}
      <span className="year">{year}</span>
      <span className="sep">-</span>
      <span className="month">{month}</span>
      <span className="sep">-</span>
      <span className="day">{day}</span>

      {/* 요일 */}
      <span className="weekday">({weekday})</span>

      {/* 시간 */}
      <span className="hour">{hour}</span>
      <span className="sep">:</span>
      <span className="minute">{minute}</span>
      <span className="sep">:</span>
      <span className="second">{second}</span>
    </p>
  );
};

export default DateTimeDisplay;
