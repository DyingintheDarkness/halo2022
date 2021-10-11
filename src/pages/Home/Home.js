

import React from "react";
import Layout from "../../components/Layout";
import { events } from "./events";
import {Link} from "react-router-dom"
import {redirectAtom} from "../../statedrive/atoms"
import {useSharedState} from "../../statedrive/index"

function Home() {
  const [redirect, setRedirect] = useSharedState(redirectAtom)
  return (
    <Layout title="Home">
      <div className="h-screen flex justify-center items-center">
        <div className="flex flex-col items-center justify-center relative">
          <h1 className="font-major text-4xl xsm:text-5xl sm:text-7xl -mt-36">
            halolegion
          </h1>
          <p className="font-pop font-light text-sm mb-2 sm:text-xl ">
            We’re the official Tech Club of DPS Indore
          </p>
          <Link to={redirect}
            className="rounded-md bg-btngreen w-20 h-7 flex justify-center shadow-md sm:text-xl sm:h-8 
          
          transform 
            hover:scale-110
            transition duration-500 ease-in-out"
          >
            get in
          </Link>
        </div>
      </div>

      <div className="relative ">
        <div className="flex flex-col font-pop bg-secdiv items-center sm:flex-row p-4 lg:p-10 sm:gap-28 sm:-mt-10">
          <h1
            className="font-bold text-xl xl:text-3xl
        
        
        sm:w-3/12
        xl:w-3/6
        
        
        "
          >
            Lorem ipsum dolor sit amet
          </h1>

          <div className="md:flex md:gap-5 z-20 ">
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
          className="hero-3 h-40 w-40 absolute -top-16 right-0 xsm:w-52 xsm:h-52 xsm:-top-24 md:w-64 md:h-64 md:-top-28 "

          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 710 468">
      <path
        fill="url(#paint3_linear)"
        d="M354.453 371.069C124.276 396.651 40.031 452.033 17.119 245.878-5.793 39.722 355.023 60.716 585.2 35.134 815.377 9.552 835.679 83.784 858.591 289.94c22.912 206.155-161.565-16.44-504.138 81.129z"
      ></path>
      <defs>
        <linearGradient
          id="paint3_linear"
          x1="826.368"
          x2="613.032"
          y1="0"
          y2="653.545"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F5CBFF"></stop>
          <stop offset="1" stopColor="#C346C2"></stop>
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
              key={event.name}
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

            Sign Up with Google
          </button>
        </div>




        
          <svg 
          className="h-32 w-32 lg:-right-8 lg:w-40 lg:h-w-40 mt-2 absolute -right-5 -top-5 md:-top-2"
          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 115 267">
          <path
            fill="url(#paint4_linear)"
            d="M0.259 189.194H204.259V393.19399999999996H0.259z"
            transform="rotate(-67.842 .259 189.194)"
          ></path>
          <defs>
            <linearGradient
              id="paint4_linear"
              x1="0.259"
              x2="204.259"
              y1="189.194"
              y2="393.194"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3B2667"></stop>
              <stop offset="1" stopColor="#BC78EC"></stop>
            </linearGradient>
          </defs>
        </svg>







      </div>


      
      



      



    
    
    
    <svg
    className="hero-1 w-80 h-80 xl:w-96 xl:h-96"
xmlns='http://www.w3.org/2000/svg'
width='345'
height='510'
fill='none'
viewBox='0 0 345 510'
>
<g filter='url(#filter0_d)'>
  <path
    fill='url(#paint0_linear)'
    d='M60.388 296C-56.398 401.17-162.957 546.744-251.88 343.79c-1.887-4.306-4.578-8.538-7.594-12.145-98.151-117.35 13.315-269.48 129.565-374.168 118.051-106.31 233.446-141.56 339.758-23.506C316.161 52.024 178.438 189.69 60.387 296z'
  ></path>
</g>
<defs>
  <filter
    id='filter0_d'
    width='765.607'
    height='747.009'
    x='-421'
    y='-238'
    colorInterpolationFilters='sRGB'
    filterUnits='userSpaceOnUse'
  >
    <feFlood floodOpacity='0' result='BackgroundImageFix'></feFlood>
    <feColorMatrix
      in='SourceAlpha'
      result='hardAlpha'
      values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
    ></feColorMatrix>
    <feOffset dy='4'></feOffset>
    <feGaussianBlur stdDeviation='10'></feGaussianBlur>
    <feComposite in2='hardAlpha' operator='out'></feComposite>
    <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'></feColorMatrix>
    <feBlend
      in2='BackgroundImageFix'
      result='effect1_dropShadow'
    ></feBlend>
    <feBlend
      in='SourceGraphic'
      in2='effect1_dropShadow'
      result='shape'
    ></feBlend>
  </filter>
  <linearGradient
    id='paint0_linear'
    x1='69.391'
    x2='193.339'
    y1='-222'
    y2='419.483'
    gradientUnits='userSpaceOnUse'
  >
    <stop stopColor='#52E5E7'></stop>
    <stop offset='0.707' stopColor='#130CB7'></stop>
  </linearGradient>
</defs>
</svg>



















      
        <svg 
        className="hero-2 w-48 h-70 xl:w-96 xl:h-10/12 sm:-right-2 right-0 "
        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 332 528">
      <g filter="url(#filter0_d)">
        <path
          fill="url(#paint1_linear)"
          d="M489.943 348.55c-109.726 98.813 19.228 142.886-234.012 15.414-34.179-17.204-66.821-39.505-86.246-72.473-66.937-113.598-43.417-257.384 58.582-349.237 116.569-104.976 173.936-115.587 280.248 2.467 106.312 118.054 97.997 298.854-18.572 403.829z"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_d"
          width="738.688"
          height="739.959"
          x="0.222"
          y="-212"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="4"></feOffset>
          <feGaussianBlur stdDeviation="10"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          ></feBlend>
        </filter>
        <linearGradient
          id="paint1_linear"
          x1="617.482"
          x2="167.017"
          y1="-66.497"
          y2="467.286"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6B73FF"></stop>
          <stop offset="1" stopColor="#000DFF"></stop>
        </linearGradient>
      </defs>
    </svg>


    </Layout>
  );
}

export default Home;
