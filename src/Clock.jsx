import { useEffect, useState } from 'react';

export const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    console.log('create component');
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      console.log('destroy component');
      clearInterval(intervalId);
    };
  }, []);

  return <div>{date.toISOString()}</div>;
};
