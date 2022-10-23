import axios from "../../src/axios";

export function login(username, password) {
  return axios.post("/admin/login", {
    username,
    password,
  });
}

export function getinfo() {
  return axios.post("/admin/getinfo");
}

export function logout() {
  return axios.post("/admin/logout");
}
