import React, { useEffect, useState, useRef } from "react";
import Layout from "../../components/Layout";
import { redirectAtom } from "../../statedrive/atoms";
import { useSharedState } from "../../statedrive/index"
import { Link } from "react-router-dom"
import { philosophy } from "./philosophy"
function Home() {
  // eslint-disable-next-line no-unused-vars
  const [redirect, setRedirect] = useSharedState(redirectAtom)
  const cardRef = useRef(null)
  const [count, setCount] = useState(0)
  const data = philosophy[count] || philosophy[0]
  useEffect(() => {
    const timer = setTimeout(() => {
      if (count === philosophy.length - 1) {
        return setCount(0)
      }
      setCount(count + 1)
      
    }, 4000)
    
    return () => clearTimeout(timer)
  }, [count])
  
  return (
    <Layout>
      <div>


        <div className="flex text-center items-center justify-center mt-10 flex-col md:mt-14 gap-2">
          <h1 className="text-3xl font-sarala font-bold xsm:text-5xl md:text-6xl">Halolegion</h1>
          <p className="text-sm font-sansation font-light xsm:text-lg md:text-xl">We’re the official Tech Club of DPS Indore</p>
        </div>

        <div className="bg-white w-full pb-10 mt-10">


          <div className="pt-10 xsm:pl-2 flex flex-col xsm:flex-row justify-around items-center gap-10 xsm:gap-0">


            <div className="flex flex-col">
              <h2 className="font-segoe uppercase md:text-lg">OUR PHilosophy</h2>
              <h1 className="font-pro text-xl sm:text-3xl xsm:w-3/4 md:text-4xl">We All Stand By Our Philosophy</h1>
              <p className="font-poppins text-grey_1 sm:text-lg md:text-xl">Our Philosophy is what makes us a legion</p>
            </div>




            <div ref={cardRef} className="shadow-spread-md   bg-white flex flex-col items-center justify-center h-54 rounded-md gap-5 w-96 p-5">
              <h1 className="text-lg font-condensed font-mediums">{data.title}</h1>
              <p className="text-xs lg:text-sm">{data.text}</p>
            </div>



          </div>


        </div>

        <div className="flex flex-col  gap-6 lg:gap-12">
          <h1 className="font-pro text-xl mt-3 text-center xsm:text-2xl md:text-3xl md:text-left md:pl-2">
            Whatever You Are Interested In<br />We Have a Right Place for you
          </h1>


          <div className="flex flex-col pl-2 gap-4 md:gap-10">

            <div className="flex flex-col">
              <h2 className="font-sansation text-lg lg:text-xl">Take A Look Around You Might Just Find Your Kind Of People</h2>
              <p className="text-grey_1 font-poppins md:w-7/12 lg:w-5/12 lg:text-lg">Have A Knack For Tech Skills? Want To Chill With Cool Peeps? Talk To School Techies? Don't Look Around, Explore Here.</p>
            </div>

            <div className="flex flex-col md:relative md:-right-72 lg:-right-96">
              <h2 className="font-sansation text-lg lg:text-xl">Get Yourself Engaged</h2>
              <p className="text-grey_1 font-poppins md:w-7/12 lg:w-5/12 lg:text-lg">Join Our Community And Find Opportunities And Things To Do Outside Of Homework :) Work On Your Interests And Skills Highly Needed In The Developing World.</p>
            </div>

            <div className="flex flex-col">
              <h2 className="font-sansation text-lg lg:text-xl">Don’t Get Bored</h2>
              <p className="text-grey_1 font-poppins md:w-7/12 lg:w-5/12 lg:text-lg">Explore All The Technical Stuff You Might Be Interested In.
                Much cooler Than School Stuff So Don't Miss Out. Spend Time With People Interested In The Things That Interest You.</p>
            </div>
          </div>
        </div>



        <div className="bg-white h-32 justify-center flex flex-col mt-5 items-center">

          <h1 className="font-pro text-lg mt-2 xsm:text-xl md:text-2xl lg:text-3xl">
            We Have Some Special Events Happening Right Now
          </h1>
          <p className="text-grey_1 font-poppins text-sm xsm:text-base md:text-lg">So Why Not Jump In And Not Miss Out On All the Fun</p>
        </div>



        <div className="flex items-center justify-center flex-col pt-10 pb-10">
          <h1 className="font-pro text-lg mt-2 xsm:text-xl md:text-2xl lg:text-3xl">Our Club Is About You</h1>
          <p className="font-poppins text-grey_1 pl-5 pr-5 xsm:w-10/12 lg:w-7/12 lg:text-lg text-sm xsm:text-base">
            Halo is about its members, about its legion. Be a part of the cavalry and join the war, I mean join the fun. Halo looks forward to having and already has people sharing the same ideas who at the same time can set themselves apart from others. We appreciate curiosity before knowledge, synergy before solitude. We stick to our philosophy, and that's why we're a legion.
          </p>

        </div>



        <div className="flex items-center justify-center flex-col bg-white mt-5 text-center mb-16 pb-10 pt-10">
          <h1 className="font-pro text-lg mt-2 xsm:text-xl md:text-2xl lg:text-3xl">Do You Think This Club Is For You?<br />Then Why Not Come Join Us</h1>
          <p className="mt-7 font-poppins text-grey_1 xsm:text-lg lg:text-xl">If You're Interested, You're Welcome To Join</p>



          <Link to={redirect} className="sm:text-xl lg:p-0 w-60 h-10 text-grey_1 font-sansation mt-3 flex gap-2 bg-white shadow-spread-md text-lg items-center justify-center p-1 rounded-md border-2 border-gray_2 border-opacity-70">
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

            Sign up with Google </Link>







        </div>

      </div>






    </Layout>
  );
}

export default Home;
