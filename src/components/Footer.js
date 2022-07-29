import React from "react";
import { Link } from "react-router-dom";
import { links } from "../components/links";
import { useSharedState } from "../statedrive";
import { signInStatusAtom } from "../statedrive/atoms";

const Footer = () => {
  // eslint-disable-next-line no-unused-vars
  const [signInStatus, setSignInStatus] = useSharedState(signInStatusAtom)
  return (


    <div className="flex flex-col bg-card gap-5 mb-10 relative z-30 text-white">
      <div className="flex flex-col md:mb-10 mb-2 pl-5 gap-5 xsm:flex-row xl:gap-32 justify-center items-center xsm:justify-start">
        <h1 className="flex-col paddingTxtIntro flex text-3xl  mt-5 md:text-4xl xl:text-5xl sm:mr-10 md:mt-10">
          <p className="text-white">
            Don’t do it alone,
          </p>
          <p className="text-white">
            do it with a <em className="accentText">legion</em>,
          </p>
          <p>
            Halo<em className="text-white">.</em>
          </p>
        </h1>


        <nav className="flex flex-col End paddingTxt font-sarabun pl-12  gap-1 md:gap-3 pt-2 md:text-lg sm:mt-8 md:mt-14">
          {links.map((link, i) => {
            return (
              <a
                key={i}
                href={link.src}
                className={`
            font-sarabun
            ${window.location.pathname === link.src
                    ? "underline"
                    : "underline"
                  }`}

              >
                {link.name}
              </a>
            );
          })}

        </nav>
      </div>

    </div>

  );
};

export default Footer;
