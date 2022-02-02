import axios from "axios";

export const checkToken = () => {
  const token = localStorage.getItem("token");
  return !!token && String(token) !== "null" && String(token) !== "undefined";
};

export const login = async (email) => {
    return getUser(email)
};

export const getUser = async (email = undefined) => {
  const token = localStorage.getItem("token");
  return axios.get("https://halolegion-2021.herokuapp.com/user", {
    params: {
      token,email
    }
  });
};

export const addUser = async (name, email, imageUrl) => {
  return axios.post("https://halolegion-2021.herokuapp.com/user", {
    name,
    email,
    avatar: imageUrl
  });
};

export const updateEvents = (events, toast) => {
  let token = localStorage.getItem("token");
  localStorage.setItem("events", JSON.stringify(events))
  axios.post("https://halolegion-2021.herokuapp.com/inductions/", {
   token,
   events
  })
    .catch(err => {
      toast.error("Something Weird Happened")
    })
  toast.success("Updated Events Succesfully")

}


export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("events")
  localStorage.setItem("redirect", "/join")
  return true;
};
