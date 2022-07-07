import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./links";
function Navbar() {
  const [hideNav, setHideNav] = useState(false);

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


        <div className="flex flex-col w-3/4 gap-2 shadow-spread-md bg-blue_5 rounded-md text-white  p-5 ">
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
          </nav>
          <button
            className=" bg-green_3 flex items-center justify-center text-center p-1 rounded-md w-36
                    outline-none
                  h-10
                    "

          >
            login
          </button>
        </div>
      </div>
      <div className="items-center justify-between p-2 hidden sm:flex lg:text-lg">
        <div>
          <button class="button">
            <Link to="/" className="align-left font-sarabun font-semibold">
              halolegion
            </Link>
          </button>
        </div>
        <nav className="font-pop">

        <button class="buttonNavFirst">
            <Link to="/" className="align-left font-sarabun font-semibold">
              Home
            </Link>
          </button>

          <button class="buttonNavSecond">
            <Link to="/contact" className="align-left font-sarabun font-semibold">
              Contact
            </Link>
          </button>

          <button class="buttonNavThird">
            <Link to="/team" className="align-left font-sarabun font-semibold">
              Team
            </Link>
          </button>

        </nav>
        <div>
          <button class="button">
            <Link to="/resources" className="align-left font-sarabun font-semibold">
              Resources
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
