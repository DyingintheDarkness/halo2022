import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./links";
import { toast } from "react-toastify"
import { logout, login, addUser } from "./authentication"
import { GoogleLogin } from "react-google-login";
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
    if (e.details === "Cookies are not enabled in current environment.") { return setCookiesEnabled(false) }
    return toast.error("Login Failed");
  };
  const responseGoogleSuccess = async (e) => {
    const { name, email, imageUrl } = e.profileObj;
    let data;
    try {
      const req = await login(name, email, imageUrl)
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
    <>
      <div className={`sm:hidden z-30  ${hideNav ? "z-50" : ""
        } p-2 left-0`}>
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
          } font-poppins justify-center items-center text-xl sm:hidden mt-5`}
      >


































        <div className="flex flex-col w-3/4 gap-2 shadow-spread-md bg-blue_5 text-white  p-5 ">
          <nav className="flex flex-col gap-1">
            {links.map((link, i) => {
              return (
                <Link
                  key={i}
                  to={link.src}
                  className={`${window.location.pathname === link.src
                    ? "underline"
                    : "no-underline"
                    }
                    
                    border-2 border-white rounded-md  flex justify-center items-center h-12 

                    `}
                >
                  {link.name.toLowerCase()}
                </Link>
              );
            })}
            {signInStatus ?
              <Link
                to="/dashboard"
                className={`${window.location.pathname === "/dashboard"
                  ? "underline"
                  : "no-underline"
                  }  
                  border-2 border-white rounded-md  flex justify-center items-center h-12 
                  `}
              >
                dashboard
              </Link>
              :
              <Link
                to="/join"
                className={`${window.location.pathname === "/join"
                  ? "underline"
                  : "no-underline"
                  }
                  
                  border-2 border-white rounded-md  flex justify-center items-center h-12 
                  `}
              >
                join
              </Link>
            }
          </nav>


          
          {signInStatus ? <button className=" bg-red_1 flex items-center justify-center text-center p-1 rounded-md w-36
                    outline-none
                  h-10
                    " onClick={handleLogout} >logout</button> :
            cookiesEnabled ?
              <GoogleLogin
                clientId="630712713096-dqoroom09ebrhe0e3j4v28c2hsda4t5d.apps.googleusercontent.com"
                onSuccess={responseGoogleSuccess}
                onFailure={responseGoogleFailure}
                cookiePolicy={"single_host_origin"}
                hostedDomain={"student.dpsindore.org"}
                render={(renderProps) => (
                  <button
                    onClick={renderProps.onClick}
                    className=" bg-green_3 flex items-center justify-center text-center p-1 rounded-md w-36
                    outline-none
                  h-10
                    "

                  >
                    login
                  </button>
                )}
              />
              : <button className=" bg-green_3 flex items-center justify-center text-center p-1 rounded-md w-36
              outline-none
            h-10
              " onClick={() => toast.info("Cookies are Disabled")}>logn</button>
          }
        </div>







        
      </div>
































      
      <div className="items-center justify-between p-2 hidden sm:flex lg:text-lg">
        <div>
          <Link to="/" className="align-left font-sarabun font-semibold">
            halolegion
          </Link>
        </div>
        <nav className="font-pop flex gap-4 md:gap-8 xl:gap-14">
          {links.map((link, i) => {
            return (
              <Link
                key={i}
                to={link.src}
                className={`
              font-pop
              ${window.location.pathname === link.src
                    ? "underline"
                    : "no-underline"
                  }`}

              >
                {link.name}
              </Link>
            );
          })}

          {signInStatus ? (
            <Link
              to="/dashboard"
              className={`${window.location.pathname === "/dashboard"
                ? "underline"
                : "no-underline"
                }`}
            >
              Dashboard
            </Link>
          ) : (
            <Link
              to="/join"
              className={`${window.location.pathname === "/join"
                ? "underline"
                : "no-underline"
                }`}
            >
              Join
            </Link>
          )}
        </nav>
        {signInStatus ? <button className="font-roboto w-20 bg-white shadow-spread-md h-8 rounded-md" onClick={handleLogout}>logout</button> :
// main
          cookiesEnabled ?
            <GoogleLogin
              clientId="630712713096-dqoroom09ebrhe0e3j4v28c2hsda4t5d.apps.googleusercontent.com"
              onSuccess={responseGoogleSuccess}
              onFailure={responseGoogleFailure}
              cookiePolicy={"single_host_origin"}
              hostedDomain={"student.dpsindore.org"} 
              render={(renderProps) => (
                <button
                  onClick={renderProps.onClick}
                  className="font-roboto w-20 bg-white shadow-spread-md h-8 rounded-md"
                >
                  login
                </button>
              )}
            />
            :
            <button className="font-roboto w-20 bg-white shadow-spread-md h-8 rounded-md" onClick={() => toast.info("Cookies are Disabled")}>login</button>
        }
      </div>
    </>
  );
}

export default Navbar;
