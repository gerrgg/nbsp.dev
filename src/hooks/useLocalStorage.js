import { useState, useEffect } from "react";

function getStorageValue(key, defaultValue) {
  // getting stored value
  if (typeof localStorage !== "undefined") {
    const saved = localStorage.getItem(key);
    const initial = JSON.parse(saved);
    return initial || defaultValue;
  } else {
    return {};
  }
}

const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    // storing input name
    if (typeof localStorage !== "undefined") {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      return localStorage.setItem(key, {});
    }
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
