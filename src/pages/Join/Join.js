import React,{useEffect} from "react";
import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router";
import { login, logout,getUser, checkToken } from "../../components/authentication";
import Layout from "../../components/Layout";
import { toast } from "react-toastify";

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
    return toast.error("Login Failed");
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
        // toast.error("Try to Login Again");
        return false;
      });
    if (data) {
      setSignInStatus(true);
      localStorage.setItem("token", data.token);
      setUser(data);
      localStorage.setItem("redirect", "/dashboard");
      setRedirect("/dashboard");
      setSelectedEvents(data.events);
      toast.success("Logged In Succesfully");
      history.push("/dashboard");
    }
  };

  const handleLogout = () => {
    logout();
    setSignInStatus(false);
    setUser(null);
    setRedirect("/join");
    toast.success("Logged Out Succesfully");
  };
  async function getData() {
    if (checkToken()) {
      const data = await getUser()
        .then((res) => {
          return res;
        })
        .catch((err) => {
          setSignInStatus(false);
          logout();
          setRedirect("/join");
          localStorage.setItem("redirect", "/join")
          setUser(null);
          setSelectedEvents([]);
          toast.error("Something Weird Happened")
          return false;
        });
      if (data) {

        setSignInStatus(true);
        setRedirect("/dashboard");
        setUser(data.data);
        setSelectedEvents(data.data.events);
        localStorage.setItem("events", JSON.stringify(data.data.events));
        localStorage.setItem("redirect", "/dashboard")
      }

    } else {
      localStorage.setItem("redirect", "/join")
      setRedirect("/join")
    }
  }

  useEffect(() => {
    getData();
    setSelectedEvents(JSON.parse(localStorage.getItem("events")));
    setRedirect(localStorage.getItem("redirect"))
    if(checkToken()){
      history.push("/dashboard")
    }
  }, []);



  return (
    <Layout>
      <div className="mb-32 mt-20 relative z-30 sm:mt-5 lg:mt-7">
        <div className="flex flex-col ml-5 gap-2">
          <h1 className="font-pop font-bold xsm:text-lg sm:text-xl lg:text-2xl xl:text-3xl ">
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing lorem.
          </h1>

          {signInStatus ? (
            <button
              onClick={handleLogout}
              className="self-start bg-white shadow-spread-md flex items-center justify-center w-32 h-7 rounded-md font-sand font-semibold xsm:w-40 xsm:h-8 xl:w-52 xl:text-lg"
            >
              Logout
            </button>
          ) : (
            <GoogleLogin
              clientId="630712713096-dqoroom09ebrhe0e3j4v28c2hsda4t5d.apps.googleusercontent.com"
              onSuccess={responseGoogleSuccess}
              onFailure={responseGoogleFailure}
              cookiePolicy={"single_host_origin"}
              // PRODUCTION ? hostedDomain={"student.dpsindore.org"} : ""
              render={(renderProps) => (
                <button
                  onClick={renderProps.onClick}
                  className="self-start bg-white shadow-spread-md flex items-center justify-center w-32 h-7 rounded-md font-sand font-semibold xsm:w-40 xsm:h-8 xl:w-52 xl:text-lg"
                >
                  Log In
                </button>
              )}
            />
            
          )}
        </div>

      </div>
    </Layout>



  );
};

export default Join;
