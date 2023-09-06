import { useState, useEffect } from 'react';

const useCurrentTime = () => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateCurrentTime = () => {
      const date = new Date();
      const year = String(date.getFullYear());
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      setCurrentTime(`${month}/${day} ${hours}:${minutes}`);
    };

    updateCurrentTime();
    const interval = setInterval(updateCurrentTime, 60000); // 매 분마다 시간 업데이트

    return () => clearInterval(interval);
  }, []);

  return currentTime;
};

export default useCurrentTime;
