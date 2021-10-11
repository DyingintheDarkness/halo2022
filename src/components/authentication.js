import axios from "axios";
import { getUserQuery } from "../GraphQL/Queries";
import {
  addUserQuery,
  updateUserQuery,
} from "../GraphQL/Mutations";

export const checkToken = () => {
  const token = localStorage.getItem("token");
  return !!token && String(token) !== "null" && String(token) !== "undefined";
};

export const login = async (name, email, imageUrl) => {
  if ((await getUser(email)).status === 204) {
    addUser(name, email, imageUrl)
    return getUser(email)
  }
  return getUser(email);
};

export const getUser = async (email = undefined) => {
  const token = localStorage.getItem("token");
  return axios.post("https://halolegion-2021.herokuapp.com/register", {
    query: getUserQuery(token, email),
  });
};

const addUser = async (name, email, imageUrl) => {
  return axios.post("https://halolegion-2021.herokuapp.com/register", {
    query: addUserQuery(name, email, imageUrl),
  });
};

export const updateEvents = (events) => {
  let token = localStorage.getItem("token");
  localStorage.setItem("events", JSON.stringify(events))
  axios.post("https://halolegion-2021.herokuapp.com/register", {
    query: updateUserQuery(token, events),
  });
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("events")
  localStorage.setItem("redirect", "/join")
  return true;
};
