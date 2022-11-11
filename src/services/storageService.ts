const saveToStorage = <T>(key: string, val: T) => {
  localStorage.setItem(key, JSON.stringify(val));
};

const loadFromStorage = (key: string) =>
  JSON.parse(localStorage.getItem(key) as string);

export const storageService = {
  saveToStorage,
  loadFromStorage
};
