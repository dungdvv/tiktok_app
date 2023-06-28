const keyToken = '@token';

const setToken = (token) => {
  localStorage.setItem(keyToken, token);
};
const getToken = () => {
  return localStorage.getItem(keyToken);
};
const deleteToken = () => {
  localStorage.removeItem(keyToken);
};

const utilsLocalStorage = {
  setToken,
  getToken,
  deleteToken,
};

export default utilsLocalStorage;
