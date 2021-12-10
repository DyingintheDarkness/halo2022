import React from "react";
import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router";
import { login, logout } from "../../components/authentication";
import { toast } from "react-toastify";
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
    if (e.details === "Cookies are not enabled in current environment.") { return toast.info("Please Enable Cookies To Continue") }
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

  return (
    <Layout>
      <div className="mb-32 xl:mb-40 mt-20 relative z-30 sm:mt-5 md:mt-8 lg:mt-7 xl:mt-10">
        <div className="font-pop flex flex-col ml-5 gap-2">
          <h1 className="font-bold text-xl xsm:text-2xl md:text-3xl">
            Join Us
          </h1>
<p className="text-secondarygray text-sm xsm:text-base md:text-lg">
Elit aliquam amet, in purus euismod est. <br/>Sollicitudin viverra pretium platea quis.
</p>
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
              // hostedDomain={"student.dpsindore.org"}
              render={(renderProps) => (
                <button
                  onClick={renderProps.onClick}
                  className="self-start bg-white shadow-spread-md flex items-center justify-around w-44 h-8  rounded-md font-sans font-semibold lg:w-56 md:text-lg"
                >
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
<span className="lg:-ml-3">
                  lorem ipsum
</span>
                </button>
              )}
            />

          )}
        </div>


<div className="mt-16 lg:mt-28 xl:mt-30 flex flex-col items-center justify-center">
  <h1 className="font-pop text-center font-bold text-lg xsm:text-xl md:text-2xl">
  Eu, est arcu suspendisse tincidunt.
  </h1>
  <p className="font-sans text-sm p-1 xsm:p-3 break-words md:w-4/5 lg:w-1/2 xsm:text-base text-secondarygray md:text-lg">
  Ut tempus euismod nunc, quam ultrices. Hendrerit duis urna nullam nullam purus netus. 
  Scelerisque quisque pharetra, diam enim purus vulputate a tincidunt ac. 
  Lorem augue interdum felis, morbi maecenas facilisis velit turpis cursus.
   Arcu amet elementum fermentum id urna, nunc. Arcu vulputate in volutpat vel eu, 
   ipsum, tempus. lorem ipsum.
  </p>
</div>

<svg
      xmlns="http://www.w3.org/2000/svg"
      className="absolute w-40 h-40 lg:w-56 lg:h-56 -right-16  lg:bottom-40 xl:bottom-36 hero-3 hidden lg:flex"
      fill="none"
      viewBox="0 0 157 290"
    >
      <circle
        cx="145"
        cy="145"
        r="145"
        fill="url(#paint0_linear_209_5)"
      ></circle>
      <defs>
        <linearGradient
          id="paint0_linear_209_5"
          x1="0"
          x2="290"
          y1="0"
          y2="290"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FEC163"></stop>
          <stop offset="1" stopColor="#DE4313"></stop>
        </linearGradient>
      </defs>
    </svg>

      </div>
      <svg
      className="absolute w-32 h-32 -top-10 -left-7 hero-5 xsm:-left-2"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 184 115"
    >
      <circle
        cx="68.673"
        cy="-0.327"
        r="114.5"
        fill="url(#paint0_linear_209_4)"
        fillOpacity="0.7"
        transform="rotate(-160.069 68.673 -.327)"
      ></circle>
      <defs>
        <linearGradient
          id="paint0_linear_209_4"
          x1="-45.827"
          x2="183.173"
          y1="-114.827"
          y2="114.173"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2AFADF"></stop>
          <stop offset="1" stopColor="#4C83FF"></stop>
        </linearGradient>
      </defs>
    </svg>


      
    </Layout>
  );
};

export default Join;
