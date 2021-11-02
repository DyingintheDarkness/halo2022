import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./links";
import { toast } from "react-toastify"
import { logout, login } from "./authentication"
import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router";
import {
  userAtom,
  signInStatusAtom,
  selectedEventsAtom,
  redirectAtom,
} from "../statedrive/atoms";
import { useSharedState, useSetSharedState } from "../statedrive/index";

function Navbar() {

  const [hideNav, setHideNav] = useState(false);
  const [cookiesEnabled, setCookiesEnabled] = useState(true)
  const setUser = useSetSharedState(userAtom);
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
    if(e.details === "Cookies are not enabled in current environment."){return setCookiesEnabled(false)}
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
      // history.push("/dashboard");
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
    <>
      <div
        className={`flex justify-between absolute top-0 left-0 h-screen w-full sm:hidden z-30  ${hideNav ? "bg-navbar z-50" : ""
          }`}
      >
        <div className="p-2 left-0">
          <svg
            onClick={() => setHideNav(!hideNav)}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>

        <div
          className={`${hideNav ? "flex" : "hidden"
            } bg-navbar h-full text-white w-full justify-center relative`}
        >
          <div className="flex flex-col gap-10 text-lg mt-20">
            <nav className="flex flex-col font-pop gap-10">
              {links.map((link, i) => {
                return (
                  <Link
                    key={i}
                    to={link.src}
                    className={`${window.location.pathname === link.src
                      ? "text-black"
                      : "text-white"
                      }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              {signInStatus ?
                <Link
                  to="/dashboard"
                  className={`${window.location.pathname === "/dashboard"
                    ? "text-black"
                    : "text-white"
                    }`}
                >
                  dashboard
                </Link>
                :
                <Link
                  to="/join"
                  className={`${window.location.pathname === "/join"
                    ? "text-black"
                    : "text-white"
                    }`}
                >
                  join
                </Link>

              }


            </nav>

{ signInStatus ? <button className="align-right font-pop flex justify-center items-center border border-white rounded-md w-20"  onClick={handleLogout} >logout</button>:

cookiesEnabled ?
            <GoogleLogin
              clientId="630712713096-dqoroom09ebrhe0e3j4v28c2hsda4t5d.apps.googleusercontent.com"
              onSuccess={responseGoogleSuccess}
              onFailure={responseGoogleFailure}
              cookiePolicy={"single_host_origin"}
              // hostedDomain={"student.dpsindore.org"}
              render={(renderProps) => (
                <button
                  onClick={renderProps.onClick}
                  className="align-right font-pop flex justify-center items-center border border-white rounded-md w-20"

                >
                 login
                </button>
              )}
            />
            : <button className="align-right font-pop flex justify-center items-center border border-white rounded-md w-20" onClick={() => toast.error("Cookies Are Not Enabled")}>login</button>
              }
          </div>
        </div>
      </div>






      <div className="items-center justify-between p-2 hidden  sm:flex lg:text-lg">
        <div>
          <Link to="/" className="align-left font-sand font-medium xl:text-xl">
            halolegion
          </Link>
        </div>
        <nav className="font-pop flex gap-4 xl:text-xl">
          {links.map((link, i) => {
            return (
              <Link
                key={i}
                to={link.src}
                className={`
              font-pop
              ${window.location.pathname === link.src
                    ? "text-navbar"
                    : "text-black"
                  }`}
                smooth
              >
                {link.name}
              </Link>
            );
          })}

          {signInStatus ? (
            <Link
              to="/dashboard"
              className={`${window.location.pathname === "/dashboard"
                ? "text-navlink"
                : "text-black"
                }`}
            >
              dashboard
            </Link>
          ) : (
            <Link
              to="/join"
              className={`${window.location.pathname === "/join"
                ? "text-navlink"
                : "text-black"
                }`}
            >
              join
            </Link>
          )}
        </nav>


       
        { signInStatus ? <button className="align-right font-pop border border-black flex items-center justify-center text-center p-1 rounded-md w-20 shadow-sm lg:w-50 lg:h-7
      outline-none
      xl:text-xl
      xl:h-8
      transform hover:shadow-lg transition duration-500 ease-in-out" onClick={handleLogout}>logout</button>:
           
      cookiesEnabled ?
      <GoogleLogin
              clientId="630712713096-dqoroom09ebrhe0e3j4v28c2hsda4t5d.apps.googleusercontent.com"
              onSuccess={responseGoogleSuccess}
              onFailure={responseGoogleFailure}
              cookiePolicy={"single_host_origin"}
              // hostedDomain={"student.dpsindore.org"} 
              render={(renderProps) => (
                <button
                  onClick={renderProps.onClick}
                  className="align-right font-pop border border-black flex items-center justify-center text-center p-1 rounded-md w-20 shadow-sm lg:w-50 lg:h-7
                  outline-none
                  xl:text-xl
                  xl:h-8
                  transform hover:shadow-lg transition duration-500 ease-in-out"

                >
                  login
                </button>
              )}
            />
            :
            <button className="align-right font-pop border border-black flex items-center justify-center text-center p-1 rounded-md w-20 shadow-sm lg:w-50 lg:h-7
            outline-none
            xl:text-xl
            xl:h-8
            transform hover:shadow-lg transition duration-500 ease-in-out" onClick={() => toast.error("Cookies Are Not Enabled")}>login</button>
              }







      </div>
    </>
  );
}

export default Navbar;
