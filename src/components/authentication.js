import axios from "axios";
import { getUser } from "../GraphQL/Queries";
import { addUser, updateUser } from "../GraphQL/Mutations";

export const checkToken = () => {
  const token = localStorage.getItem("token");
  return !!token && String(token) !== "null" && String(token) !== "undefined";
};

export const login = async (
  name,
  email,
  imageUrl,
  setUser,
  setSignInStatus
) => {
  let token = localStorage.getItem("token");
  axios
    .post("https://halolegion-2021.herokuapp.com/register", {
      query: getUser(token, email),
    })
    .then((res) => {
      if (res.status === 204) {
        axios
          .post("https://halolegion-2021.herokuapp.com/register", {
            query: addUser(name, email, imageUrl),
          })
          .then((addRes) => {
            token = addRes.data;
            localStorage.setItem("token", token);
            axios
              .post("https://halolegion-2021.herokuapp.com/register", {
                query: getUser(token, email),
              })
              .then((getRes) => {
                if (res.status !== 404 && res.data !== undefined) {
                  console.log(res.data);
                  setUser(getRes.data);
                  setSignInStatus(true);
                }
              })
              .catch((err) => {
                console.log(err);
              });
          });
      } else if (res.status !== 404) {
        if (!checkToken()) {
          localStorage.setItem("token", res.data.token);
        }

        console.log(res.data);
        setUser(res.data);
        setSignInStatus(true);
      }
    })
    .catch((err) => {
      // Login In Error
      alert("Something Weird Happened");
      setSignInStatus(false);
      localStorage.clear("token");
      setUser(null);
    });
};

export const updateEvents = (events) => {
  console.log(events);
  let token = localStorage.getItem("token");
  console.log(token);
  axios
    .post("https://halolegion-2021.herokuapp.com/register", {
      query: updateUser(token, events),
    })
    .then((res) => {
      console.log(res);
      console.log("Updated Events");
    })
    .catch((err) => {
      console.log(err);
    });
};

