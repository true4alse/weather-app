// src/components/TimeThemeContainer.jsx
import { useEffect, useState } from 'react';

const TimeThemeContainer = ({ children, className = '' }) => {
  const [isDay, setIsDay] = useState(true);

  const checkDayOrNight = () => {
    const hour = new Date().getHours();
    return hour >= 6 && hour < 18; // 6시~18시 = 낮
  };

  useEffect(() => {
    // 처음 한 번 체크
    setIsDay(checkDayOrNight());

    // 필요하면 주기적으로 다시 체크 (예: 1분마다)
    const timer = setInterval(() => {
      setIsDay(checkDayOrNight());
    }, 60 * 1000);

    return () => clearInterval(timer);
  }, []);

  const containerClass = `app-container ${isDay ? 'day' : 'night'} ${className}`.trim();

  return <div className={containerClass}>{children}</div>;
};

export default TimeThemeContainer;
