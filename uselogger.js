import { useEffect } from 'react';

const useLogger = (label, value) => {
  useEffect(() => {
    console.log(`[${label}]`, value);
  }, [value]);
};

export default useLogger;


