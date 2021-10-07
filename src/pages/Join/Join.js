import React, { useContext } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { login } from "../../components/authentication";
import Layout from "../../components/Layout";
import { userAtom, signInStatusAtom } from "../../statedrive/atoms";
import { useSharedState} from "../../statedrive/index";

const Join = () => {
  const client =
    "630712713096-dqoroom09ebrhe0e3j4v28c2hsda4t5d.apps.googleusercontent.com";
  const [user, setUser] = useSharedState(userAtom);
  const [signInStatus, setSignInStatus] = useSharedState(signInStatusAtom)
  const responseGoogleFailure = (e) => {
    console.log(e);
  };
  const responseGoogleLogout = () => {
    localStorage.removeItem("token");
    setSignInStatus(false);
    setUser(null);
  };
  const responseGoogleSuccess = async () => {
    console.log("Logged In");
    const { name, email, imageUrl } = e.profileObj;
    login(name, email, imageUrl, setUser, setSignInStatus).then((res) => {
      console.log(res);
    });
    setSignInStatus(true);
  };

  return (
    <Layout>
      <br />
      {signInStatus ? (
        <GoogleLogout
          clientId={client}
          onLogoutSuccess={responseGoogleLogout}
          render={(renderProps) => (
            <button onClick={renderProps.onClick} className="" >Logout</button>
          )}
        />
      ) : (
        <GoogleLogin
          clientId={client}
          onSuccess={responseGoogleSuccess}
          onFailure={responseGoogleFailure}
          cookiePolicy={"single_host_origin"}
          render={(renderProps) => (
            <button onClick={renderProps.onClick}>Login</button>
          )}
        />
      )}
      <br />
      <br />
      <br />
      <br />
    </Layout>
  );
};

export default Join;
