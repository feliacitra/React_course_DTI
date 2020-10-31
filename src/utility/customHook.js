import { useState, useEffect } from 'react';

const useTitle = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You Clicked ${count} times`;
  }, [count]);
  return [count, setCount];
};
export default useTitle;
