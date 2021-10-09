import axios from "axios";
import { getUser as getUserQuery } from "../GraphQL/Queries";
import {
  addUser as addUserQuery,
  updateUser as updateUserQuery,
} from "../GraphQL/Mutations";

export const checkToken = () => {
  const token = localStorage.getItem("token");
  return !!token && String(token) !== "null" && String(token) !== "undefined";
};

export const login = async (name, email, imageUrl) => {
  if ((await getUser(email)).status === 204) {
    getUser(addUser(name, email, imageUrl).data);
  } else if ((await getUser(email)).status === 404) {
    return false;
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

  axios.post("https://halolegion-2021.herokuapp.com/register", {
    query: updateUserQuery(token, events),
  });
};

export const logout = (setSignInStatus, setUser, setRedirect) => {
  localStorage.removeItem("token");
  return true;
};
