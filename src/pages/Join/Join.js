import React, { useEffect } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useHistory } from "react-router";
import { login, logout } from "../../components/authentication";
import Layout from "../../components/Layout";
import {
  userAtom,
  signInStatusAtom,
  selectedEventsAtom,
  redirectAtom,
} from "../../statedrive/atoms";
import { useSharedState, useSetSharedState } from "../../statedrive/index";

const Join = () => {
  const setUser = useSetSharedState(userAtom);
  const history = useHistory();
  const [signInStatus, setSignInStatus] = useSharedState(signInStatusAtom);
  const setSelectedEvents = useSetSharedState(selectedEventsAtom);
  const setRedirect = useSetSharedState(redirectAtom);
  const responseGoogleFailure = (e) => {
    if (e.type === "tokenFailed") {
      return alert("You need a DPS Indore email to signup");
    }
    logout();
    setSignInStatus(false);
    setUser(null);
    setRedirect("/join");
    return alert("Login Failed");
  };
  const responseGoogleSuccess = async (e) => {
    const { name, email, imageUrl } = e.profileObj;
    const data = await login(name, email, imageUrl)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        logout();
        setSignInStatus(false);
        setRedirect("/join");
        setUser(null);
        setSelectedEvents([]);
        alert("Try To Login Again");
        return false;
      });
    if (data) {
      setSignInStatus(true);
      localStorage.setItem("token", data.token);
      setUser(data);
      localStorage.setItem("redirect", "/dashboard");
      setRedirect("/dashboard");
      setSelectedEvents(data.events);
      alert("Logged In Succesfully");
      history.push("/dashboard");
    }
  };
  const handleLogout = () => {
    logout();
    setSignInStatus(false);
    setUser(null);
    setRedirect("/join");
    alert("Logged Out Succesfully");
  };

  return (
    <Layout title="Join">
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
          <button onClick={handleLogout} className="border-2 z-40 relative">
            Logout
          </button>
        ) : (
          <GoogleLogin
            clientId="630712713096-dqoroom09ebrhe0e3j4v28c2hsda4t5d.apps.googleusercontent.com"
            onSuccess={responseGoogleSuccess}
            onFailure={responseGoogleFailure}
            cookiePolicy={"single_host_origin"}
            // hostedDomain={"student.dpsindore.org"}
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
