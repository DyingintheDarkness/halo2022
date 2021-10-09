import React, { useEffect } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import {
  checkToken,
  getUser,
  login,
  logout,
} from "../../components/authentication";
import Layout from "../../components/Layout";
import {
  userAtom,
  signInStatusAtom,
  selectedEventsAtom,
  redirectAtom,
} from "../../statedrive/atoms";
import { useSharedState, useSetSharedState } from "../../statedrive/index";

const Join = () => {
  const client =
    "630712713096-dqoroom09ebrhe0e3j4v28c2hsda4t5d.apps.googleusercontent.com";
  const [user, setUser] = useSharedState(userAtom);
  const [signInStatus, setSignInStatus] = useSharedState(signInStatusAtom);
  const setSelectedEvents = useSetSharedState(selectedEventsAtom);
  const setRedirect = useSetSharedState(redirectAtom);
  const responseGoogleFailure = () => {
    console.log("Login Failed");
  };
  const responseGoogleSuccess = async (e) => {
    console.log("Logged In");
    const { name, email, imageUrl } = e.profileObj;

    const data = await login(name, email, imageUrl).then((res) => {
      if (res.status !== 404) {
        return res.data;
      } else if(!res) {
        return alert("Something Weird Happened");
      }
    });
    console.log(data);
    setSignInStatus(true);
    localStorage.setItem("token", data.token);
    setUser(data);
    setSelectedEvents(data.events);
  };
const handleLogout = () => {
  logout()
  setUser(null)
  setRedirect("/join")
  setSignInStatus(false)
}
  
  return (
    <Layout>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="ml-10">
        {signInStatus ? (
          <button
            onClick={handleLogout}
            className="border-2 z-40 relative"
          >
            Logout
          </button>
        ) : (
          <GoogleLogin
            clientId={client}
            onSuccess={responseGoogleSuccess}
            onFailure={responseGoogleFailure}
            cookiePolicy={"single_host_origin"}
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                className="border-2 z-40 relative"
              >
                Login
              </button>
            )}
          />
        )}
      </div>
      <br />
      <br />
      <br />
      <br />
    </Layout>
  );
};

export default Join;
