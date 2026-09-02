export const getLocalStorage = <T>(key: string): T | null => {
  if (typeof window === 'undefined') {
    return null;
  }

  const value = window.localStorage.getItem(key);

  if (value === null) {
    return null;
  }

  try {
    return JSON.parse(value) as T;
  } catch {
    return value as T;
  }
};

export const setLocalStorage = <T>(key: string, value: T): void => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
};
