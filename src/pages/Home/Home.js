// Add Pink Blob At 2AM Issues Fixed
// Don't Waste Time on This Shit

import React from "react";
import Layout from "../../components/Layout";
import { useHistory } from "react-router";
import { events } from "./events";
function Home(props) {
  // const { user } = useContext(AuthContext);
  // const history = useHistory();
  return (
    <Layout>
      <div className="h-screen flex justify-center items-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-major text-4xl xsm:text-5xl sm:text-7xl -mt-36">
            halolegion
          </h1>
          <p className="font-pop font-light text-sm mb-2 sm:text-xl">
            We’re the official Tech Club of DPS Indore
          </p>
          <button
            className="rounded-md bg-btngreen w-20 h-7 flex justify-center shadow-md sm:text-xl sm:h-8 
          
          transform 
            hover:scale-110
            transition duration-500 ease-in-out"
          >
            get in
          </button>
        </div>
      </div>

      <div className="relative">
        <div className="flex flex-col font-pop bg-secdiv items-center sm:flex-row p-4 lg:p-10 sm:gap-28 sm:-mt-10">
          <h1
            className="font-bold text-xl xl:text-3xl
        
        
        sm:w-3/12
        xl:w-3/6
        
        
        "
          >
            Lorem ipsum dolor sit amet
          </h1>

          <div className="md:flex md:gap-5 z-20">
            <div className="flex flex-col items-center justify-center">
              <h2 className="font-medium text-lg  md:text-xl xl:text-2xl">
                Lorem ipsum dolor
              </h2>
              <p className="font-light text-sm sm:w-64 pl-2 lg:p-0 md:break-all xl:text-lg xl:w-10/12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dis
                diam hendrerit volutpat arcu scelerisque sed tempor. Facilisis
                quam sagittis.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h2 className="font-medium text-lg md:text-xl xl:text-2xl ">
                Lorem ipsum dolor
              </h2>
              <p className="font-light text-sm sm:w-64 pl-2 md:pl-0 xl:text-lg xl:w-10/12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dis
                diam hendrerit volutpat arcu scelerisque sed tempor. Facilisis
                quam sagittis.
              </p>
            </div>
          </div>
        </div>

        <svg
          className="hero-3 h-40 w-40 absolute -top-16 right-0 xsm:w-52 xsm:h-52 xsm:-top-24 md:w-64 md:h-64 md:-top-28"
          viewBox="0 0 710 468"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M354.453 371.069C124.276 396.651 40.0314 452.033 17.1194 245.878C-5.79257 39.7224 355.023 60.7159 585.2 35.1342C815.377 9.55248 835.679 83.7846 858.591 289.94C881.503 496.095 697.026 273.5 354.453 371.069Z"
            fill="url(#paint3_linear)"
          />
          <defs>
            <linearGradient
              id="paint3_linear"
              x1="826.368"
              y1="0"
              x2="613.032"
              y2="653.545"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F5CBFF" />
              <stop offset="1" stop-color="#C346C2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="flex justify-center items-center flex-col gap-3 mt-20">
        <h1 className="font-sand font-bold text-lg md:text-2xl xl:text-3xl">
          Lorem ipsum dolor sit amet
        </h1>
        <div className="flex md:flex-row justify-center items-center gap-2 flex-wrap">
          {events.map((event) => {
            return (
              <button
                className={`  
            flex p-2
            rounded-md
            justify-center
            items-center
            bg-${event.bg}
            w-40
            mt-1
            shadow-md
            font-pop
            justify-evenly
            transform 
            hover:-translate-y-2
            transition duration-300 ease-in-out
            xl:w-44
            xl:text-lg
            `}
              >
                {event.icon}
                {event.name}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col justify-center items-center bg-primaryblue pt-5 text-white mt-40 md:p-8 xsm:p-6">
        <h1 className="font-rose text-xl sm:text-2xl md:text-3xl">
          Lorem ipsum dolor sit amet
        </h1>
        <p className="p-2 ml-5 font-pop break-words text-sm md:text-lg sm:pb-10 pb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
          tincidunt dui faucibus gravida tempor ut magna elementum. Tortor ipsum
          sit et consectetur morbi auctor facilisi pellentesque. Vivamus
          sagittis, morbi tortor, lacus, eget erat. Fames amet proin id velit,
          nisl. Nunc nulla ullamcorper ut eget pellentesque pellentesque
          ullamcorper scelerisque. Ac dictum viverra ipsum a amet placerat vel
          id diam.
        </p>
      </div>
      <div className="relative">
        <div className="flex flex-col justify-start gap-4 mb-20 font-pop pl-2 md:text-2xl sm:text-xl mt-10">
          <h1 className="font-bold lg:w-5/12 xl:text-3xl w-60 md:w-80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </h1>
          <button
            className="sign-google-btn flex items-center text-sm gap-5 w-56 h-8 p-2 bg-white font-medium rounded-lg
          
        sm:h-10
        xl:pt-4
        xl:pb-4

        xl:w-72
        xl:text-xl
        transform 
        
        hover:scale-105
      transition duration-700 ease-out
      
      
      "
          >
            <svg
              className="w-8 h-6 xl:h-10"
              viewBox="0 0 37 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0)">
                <path
                  d="M36.481 18.8368C36.481 17.3619 36.3585 16.2856 36.0935 15.1694H18.8586V21.8264H28.9751C28.7712 23.4808 27.6698 25.9722 25.2222 27.6463L25.1879 27.8692L30.6372 31.9945L31.0148 32.0313C34.4821 28.9021 36.481 24.2979 36.481 18.8368Z"
                  fill="#4285F4"
                />
                <path
                  d="M18.8586 36.3762C23.8148 36.3762 27.9756 34.7816 31.0148 32.0312L25.2222 27.6462C23.6721 28.7026 21.5916 29.44 18.8586 29.44C14.0043 29.44 9.88423 26.3109 8.41555 21.9858L8.20028 22.0037L2.53396 26.2889L2.45985 26.4902C5.47848 32.35 11.679 36.3762 18.8586 36.3762Z"
                  fill="#34A853"
                />
                <path
                  d="M8.41555 21.9859C8.02803 20.8698 7.80376 19.6738 7.80376 18.4382C7.80376 17.2023 8.02803 16.0065 8.39517 14.8904L8.3849 14.6527L2.64757 10.2986L2.45986 10.3858C1.21573 12.8175 0.501854 15.5481 0.501854 18.4382C0.501854 21.3282 1.21573 24.0587 2.45986 26.4903L8.41555 21.9859Z"
                  fill="#FBBC05"
                />
                <path
                  d="M18.8586 7.43605C22.3055 7.43605 24.6306 8.89102 25.9564 10.1069L31.1371 5.16392C27.9553 2.27389 23.8148 0.5 18.8586 0.5C11.679 0.5 5.47848 4.52609 2.45985 10.3858L8.39516 14.8904C9.88423 10.5653 14.0043 7.43605 18.8586 7.43605Z"
                  fill="#EB4335"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect
                    width="36"
                    height="36"
                    fill="white"
                    transform="translate(0.5 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            Sign Up with Google
          </button>
        </div>
        <svg
          className="h-32 w-32 lg:-right-8 lg:w-40 lg:h-w-40 mt-2 absolute -right-5 -top-5 md:-top-2"
          viewBox="0 0 115 267"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.258789"
            y="189.194"
            width="204"
            height="204"
            transform="rotate(-67.8424 0.258789 189.194)"
            fill="url(#paint4_linear)"
          />
          <defs>
            <linearGradient
              id="paint4_linear"
              x1="0.258789"
              y1="189.194"
              x2="204.259"
              y2="393.194"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#3B2667" />
              <stop offset="1" stop-color="#BC78EC" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <svg
        className="hero-1 w-80 h-80 xl:w-96 xl:h-96"
        viewBox="0 0 345 510"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d)">
          <path
            d="M60.3875 296C-56.398 401.17 -162.956 546.744 -251.88 343.79C-253.767 339.484 -256.458 335.252 -259.474 331.645C-357.625 214.295 -246.159 62.1654 -129.909 -42.5231C-11.8578 -148.833 103.537 -184.083 209.849 -66.0291C316.161 52.0245 178.438 189.691 60.3875 296Z"
            fill="url(#paint0_linear)"
          />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="-421"
            y="-238"
            width="765.607"
            height="747.009"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="10" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear"
            x1="69.3906"
            y1="-222"
            x2="193.339"
            y2="419.483"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#52E5E7" />
            <stop offset="0.706597" stop-color="#130CB7" />
          </linearGradient>
        </defs>
      </svg>

      <svg
        className="hero-2 w-48 h-70 xl:w-96 xl:h-10/12 sm:-right-2 right-0"
        viewBox="0 0 332 528"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d)">
          <path
            d="M489.943 348.55C380.217 447.363 509.171 491.436 255.931 363.964C221.752 346.76 189.11 324.459 169.685 291.491C102.748 177.893 126.268 34.1074 228.267 -57.7465C344.836 -162.722 402.203 -173.333 508.515 -55.2789C614.827 62.7747 606.512 243.575 489.943 348.55Z"
            fill="url(#paint1_linear)"
          />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="0.221558"
            y="-212"
            width="738.688"
            height="739.959"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="10" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint1_linear"
            x1="617.482"
            y1="-66.4971"
            x2="167.017"
            y2="467.286"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#6B73FF" />
            <stop offset="1" stop-color="#000DFF" />
          </linearGradient>
        </defs>
      </svg>
    </Layout>
  );
}

export default Home;
