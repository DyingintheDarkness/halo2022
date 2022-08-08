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

        <div className="pb-10 mt-10">

          <a href="https://dpsindore.org/" className="align-left font-sarabun">
            <div className="bg-card cardPad flex flex-col xsm:flex-row items-center">
            <img src="https://i.imgur.com/T9JD2EW.png" className="resImg px-11" width="240" height="246"></img>
              <div className="hidecausebadresponsive">
                <p className="lol text-4xl">halolegion
                </p>
                <p className="sublol text-3xl">The official tech club of DPS Indore</p>
              </div>
              <img src="https://i.imgur.com/YrOXLUv.png" className="resImgEnd px-11" width="194" height="163"></img>
            </div>
          </a>

        </div>


        <div>

          <div className="txt-card-top cardPad flex flex-col xsm:flex-row">
            <div>
              <p className="loli text-4xl">Philosophy
              </p>
            </div>
            <img src="https://i.imgur.com/olqGEit.png" className="resImgEnd px-11 hidden" width="194" height="163"></img>
          </div>

          <div className="txt-card-bottom cardPad flex flex-col xsm:flex-row items-center">
            <div>
              <p className="loli text-3xl text-white">
                At Halo, we are more than a high school club. Halo is about making.<br/>
                It's about its members. A legion is dysfunctional unless a cavalry is<br/>
                present. Thus, Halo cares about its cavalry. Halo consists of<br/>
                like-minded individuals possessing a diverse skill-set.<br/>
                Our Philosophy is what makes us a legion.<br/>
              </p>
            </div>
            <img src="https://i.imgur.com/olqGEit.png" className="resImgEnd px-11 hidden" width="194" height="163"></img>
          </div>

        </div>

        <div className="pb-10 mt-10">

          <div className="txt-card-top  cardPad flex flex-col xsm:flex-row">
            <div>
              <p className="loli text-4xl">Our club is about you
              </p>
            </div>
            <img src="https://i.imgur.com/olqGEit.png" className="resImgEnd px-11 hidden" width="194" height="163"></img>
          </div>

          <div className="txt-card-bottom cardPad flex flex-col xsm:flex-row items-center">
            <div>
              <p className="loli text-3xl text-white">Halo is about its members, about its legion. <br></br>
                Be a part of the cavalry and join the war, I mean join the fun.
              </p>
            </div>
            <img src="https://i.imgur.com/olqGEit.png" className="resImgEnd px-11 hidden" width="194" height="163"></img>
          </div>

        </div>

      </div>

    </Layout>
  );
}

export default Home;
