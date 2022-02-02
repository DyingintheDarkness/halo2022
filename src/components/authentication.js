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
  return axios.get("http://localhost:8300/user", {
    params: {
      token,email
    }
  });
};

export const addUser = async (name, email, imageUrl) => {
  return axios.post("http://localhost:8300/user", {
    name,
    email,
    avatar: imageUrl
  });
};

export const updateEvents = (events, toast) => {
  let token = localStorage.getItem("token");
  localStorage.setItem("events", JSON.stringify(events))
  axios.post("http://localhost:8300/inductions/", {
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
