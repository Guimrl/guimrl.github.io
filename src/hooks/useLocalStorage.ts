import { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../shared/localStorage';

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [value, setValue] = useState<T>(() => {
    return getLocalStorage<T>(key) ?? initialValue;
  });

  useEffect(() => {
    setLocalStorage(key, value);
  }, [key, value]);

  return [value, setValue] as const;
};
