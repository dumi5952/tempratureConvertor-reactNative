import { useEffect, useState } from "react";

const useDebounce = (value, delay = 500) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => clearTimeout(debounceTimeout);
  }, [value, delay]);

  return debounceValue;
};

export default useDebounce;