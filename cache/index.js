let cachedAuthCode = '';

const getAuth = () => {
  return cachedAuthCode;
};

const setAuth = (authCode) => {
  cachedAuthCode = authCode;
};

export default {
  getAuth, setAuth,
}