import axios from "axios";
const API_ROOT = "http://localhost:5000/api";

export function getApiRoot() {
  return API_ROOT;
}

export function updateToken(data) {
  window.localStorage.setItem("jwt", data.user.token);
  window.localStorage.setItem("username", data.user.username);
  window.localStorage.setItem("email", data.user.email);
}

export async function login(email, password) {
  let url = getApiRoot() + "/users/login";

  let body = { user: { email, password } };
  let res = await axios.post(url, body);

  updateToken(res.data);
  return res;
}

export async function register(username, email, password) {
  let url = getApiRoot() + "/users";

  let body = { user: { username, email, password } };
  let res = await axios.post(url, body);

  updateToken(res.data);
  return res;
}

export function logout() {
  window.localStorage.setItem("jwt", "");
  window.localStorage.setItem("username", "");
  window.localStorage.setItem("email", "");
}

export async function getProfile() {
  let token = window.localStorage.getItem("jwt");
  let res = await axios.get(API_ROOT + "/user", {
    headers: { authorization: "Token " + token }
  });

  console.log(res.data);
  return res;
}
