import axios from "../../src/axios";

export function login(username, password) {
  return axios.post("/admin/login", {
    username,
    password,
  });
}

export function getInfo(username, password) {
  return axios.post("/admin/getinfo");
}
