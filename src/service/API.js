import axios from "axios";
const URL_BASE = "https://back-drivenespresso.herokuapp.com";

function createHeaders() {
  const auth = JSON.parse(localStorage.getItem("drivenespresso"));
  const config = {
    header: {
      Authorization: `Bearer ${auth.token}`,
    },
  };
  return config;
}

function postProducts(body) {
  const promise = axios.post(`${URL_BASE}`, body);
  return promise;
}

function getProducts() {
  const promise = axios.get(`${URL_BASE}`);
  return promise;
}

function signUp(body) {
  const signUpAPI = `${URL_BASE}/sign-up`;
  return axios.post(signUpAPI, body);
}

function signIn(body) {
  const signInAPI = `${URL_BASE}/sign-in`;
  return axios.post(signInAPI, body);
}

export { getProducts, signUp, signIn, postProducts};
