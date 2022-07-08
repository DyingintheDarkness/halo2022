import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import Layout from "../../components/Layout";
import { logout, login, addUser } from "../../components/authentication";
import {
  userAtom,
  signInStatusAtom,
  selectedEventsAtom,
  redirectAtom,
} from "../../statedrive/atoms";
import { useSharedState, useSetSharedState } from "../../statedrive/index";

const Join = () => {
  const history = useHistory();
  const setUser = useSetSharedState(userAtom);
  const [cookiesEnabled, setCookiesEnabled] = useState(true)
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
    if (e.details === "Cookies are not enabled in current environment.") { return setCookiesEnabled(false) }
    return toast.error("Login Failed");
  };
  const responseGoogleSuccess = async (e) => {
    const { name, email, imageUrl } = e.profileObj;
    let data;
    try {
      const req = await login(email)
      data = req
    } catch (err) {
      data = await addUser(name, email, imageUrl)
    }
    if (data) {
      setSignInStatus(true);
      localStorage.setItem("token", data.data.token);
      setUser(data.data.user);
      localStorage.setItem("redirect", "/dashboard");
      setRedirect("/dashboard");
      setSelectedEvents(data.data.user.events);
      toast.success("Logged In Succesfully");
      history.push("/dashboard");
    } else {
      logout();
      setSignInStatus(false);
      setRedirect("/join");
      setUser(null);
      setSelectedEvents([]);
      return false;
    }
  };

  const handleLogout = () => {
    logout();
    setSignInStatus(false);
    setUser(null);
    setRedirect("/join");
    toast.success("Logged Out Succesfully");
  };


  return (
    <Layout>

      <div className="text-center flex flex-col items-center justify-center p-1 mt-14 mb-56">
        <h1 className="font-sarala font-bold text-lg xsm:text-2xl sm:text-4xl">
          Join us and help our to make the<br />good work even better!
        </h1>
        <p className="font-sarabun text-grey_1 break-words w-10/12 sm:text-lg">Well, what are you waiting for? We believe in you!</p>
















































        {signInStatus ? (
          <button
            onClick={handleLogout}
            className="sm:text-xl lg:p-0 w-60 h-10 text-grey_1 font-sansation mt-3 flex gap-2 bg-white shadow-spread-md text-lg items-center justify-center p-1 rounded-md border-2 border-gray_2 border-opacity-70"
          >
            <span className="pl-2">
              <svg
                className="w-8 h-6 -ml-1 lg:-ml-5"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 37 37">
                <g clipPath="url(#clip0)">
                  <path
                    fill="#4285F4"
                    d="M36.481 18.837c0-1.475-.123-2.551-.388-3.668H18.86v6.657h10.116c-.204 1.655-1.305 4.146-3.753 5.82l-.034.223 5.45 4.125.377.037c3.467-3.129 5.466-7.733 5.466-13.194z"
                  ></path>
                  <path
                    fill="#34A853"
                    d="M18.859 36.376c4.956 0 9.117-1.594 12.156-4.345l-5.793-4.385c-1.55 1.057-3.63 1.794-6.363 1.794-4.855 0-8.975-3.13-10.443-7.454l-.216.018-5.666 4.285-.074.201c3.018 5.86 9.219 9.886 16.399 9.886z"
                  ></path>
                  <path
                    fill="#FBBC05"
                    d="M8.416 21.986a10.816 10.816 0 01-.612-3.548c0-1.236.224-2.431.591-3.548l-.01-.237-5.737-4.354-.188.087a17.623 17.623 0 00-1.958 8.052c0 2.89.714 5.62 1.958 8.052l5.956-4.504z"
                  ></path>
                  <path
                    fill="#EB4335"
                    d="M18.859 7.436c3.446 0 5.772 1.455 7.097 2.67l5.181-4.942C27.955 2.274 23.815.5 18.86.5c-7.18 0-13.38 4.026-16.4 9.886l5.936 4.504c1.49-4.325 5.61-7.454 10.464-7.454z"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <path
                      fill="#fff"
                      d="M0 0H36V36H0z"
                      transform="translate(.5 .5)"
                    ></path>
                  </clipPath>
                </defs>
              </svg>
            </span>
            Logout
          </button>
        ) : (

          cookiesEnabled ? <GoogleLogin
            clientId="630712713096-dqoroom09ebrhe0e3j4v28c2hsda4t5d.apps.googleusercontent.com"
            onSuccess={responseGoogleSuccess}
            onFailure={responseGoogleFailure}
            cookiePolicy={"single_host_origin"}
            hostedDomain={"student.dpsindore.org"}
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                className="sm:text-xl lg:p-0 w-60 h-10 text-grey_1 font-sansation mt-3 flex gap-2 bg-white shadow-spread-md text-lg items-center justify-center p-1 rounded-md border-2 border-gray_2 border-opacity-70"
              >
                <span className="pl-2">
                  <svg
                    className="w-8 h-6 -ml-1 lg:-ml-5"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 37 37">
                    <g clipPath="url(#clip0)">
                      <path
                        fill="#4285F4"
                        d="M36.481 18.837c0-1.475-.123-2.551-.388-3.668H18.86v6.657h10.116c-.204 1.655-1.305 4.146-3.753 5.82l-.034.223 5.45 4.125.377.037c3.467-3.129 5.466-7.733 5.466-13.194z"
                      ></path>
                      <path
                        fill="#34A853"
                        d="M18.859 36.376c4.956 0 9.117-1.594 12.156-4.345l-5.793-4.385c-1.55 1.057-3.63 1.794-6.363 1.794-4.855 0-8.975-3.13-10.443-7.454l-.216.018-5.666 4.285-.074.201c3.018 5.86 9.219 9.886 16.399 9.886z"
                      ></path>
                      <path
                        fill="#FBBC05"
                        d="M8.416 21.986a10.816 10.816 0 01-.612-3.548c0-1.236.224-2.431.591-3.548l-.01-.237-5.737-4.354-.188.087a17.623 17.623 0 00-1.958 8.052c0 2.89.714 5.62 1.958 8.052l5.956-4.504z"
                      ></path>
                      <path
                        fill="#EB4335"
                        d="M18.859 7.436c3.446 0 5.772 1.455 7.097 2.67l5.181-4.942C27.955 2.274 23.815.5 18.86.5c-7.18 0-13.38 4.026-16.4 9.886l5.936 4.504c1.49-4.325 5.61-7.454 10.464-7.454z"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <path
                          fill="#fff"
                          d="M0 0H36V36H0z"
                          transform="translate(.5 .5)"
                        ></path>
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                Sign up with Google
              </button>
            )}
          />

            :
            <button
              onClick={() => toast.info("Cookies are Disabled")}
              className="sm:text-xl lg:p-0 w-60 h-10 text-grey_1 font-sansation mt-3 flex gap-2 bg-white shadow-spread-md text-lg items-center justify-center p-1 rounded-md border-2 border-gray_2 border-opacity-70"
            >
              <span className="pl-2">
                <svg
                  className="w-8 h-6 -ml-1 lg:-ml-5"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 37 37">
                  <g clipPath="url(#clip0)">
                    <path
                      fill="#4285F4"
                      d="M36.481 18.837c0-1.475-.123-2.551-.388-3.668H18.86v6.657h10.116c-.204 1.655-1.305 4.146-3.753 5.82l-.034.223 5.45 4.125.377.037c3.467-3.129 5.466-7.733 5.466-13.194z"
                    ></path>
                    <path
                      fill="#34A853"
                      d="M18.859 36.376c4.956 0 9.117-1.594 12.156-4.345l-5.793-4.385c-1.55 1.057-3.63 1.794-6.363 1.794-4.855 0-8.975-3.13-10.443-7.454l-.216.018-5.666 4.285-.074.201c3.018 5.86 9.219 9.886 16.399 9.886z"
                    ></path>
                    <path
                      fill="#FBBC05"
                      d="M8.416 21.986a10.816 10.816 0 01-.612-3.548c0-1.236.224-2.431.591-3.548l-.01-.237-5.737-4.354-.188.087a17.623 17.623 0 00-1.958 8.052c0 2.89.714 5.62 1.958 8.052l5.956-4.504z"
                    ></path>
                    <path
                      fill="#EB4335"
                      d="M18.859 7.436c3.446 0 5.772 1.455 7.097 2.67l5.181-4.942C27.955 2.274 23.815.5 18.86.5c-7.18 0-13.38 4.026-16.4 9.886l5.936 4.504c1.49-4.325 5.61-7.454 10.464-7.454z"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <path
                        fill="#fff"
                        d="M0 0H36V36H0z"
                        transform="translate(.5 .5)"
                      ></path>
                    </clipPath>
                  </defs>
                </svg>
              </span>
              Sign up with Google
            </button>
        )}























































































      </div>



    </Layout>
  );
};

export default Join;
