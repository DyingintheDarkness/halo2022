import React, { useState, useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { updateEvents } from "../../components/authentication";
import Layout from "../../components/Layout";


import {
  userAtom,
  signInStatusAtom,
  selectedEventsAtom,
  redirectAtom,
} from "../../statedrive/atoms";
import { useSharedState } from "../../statedrive/index";

import EventCard from "./eventCard";

const Dashboard = () => {
  const [user, setUser] = useSharedState(userAtom);
  const [signInStatus, setSignInStatus] = useSharedState(signInStatusAtom);
  const [selectedEvents, setSelectedEvents] =
    useSharedState(selectedEventsAtom);
  const [redirect, setRedirect] = useSharedState(redirectAtom)
  const [viewPrompts, setViewPrompts] = useState(false);
  const history = useHistory()
  const events = [
    "coding",
    "writing",
    "designing",
    "pitching",
    "gaming",
    "quiz",
  ];

  useEffect(() => {
    const current = new Date().getTime();
    const past = new Date("Sep 23 2021 19:36:40").getTime();
    if (current > past) {
      setViewPrompts(true);
    }
  }, []);

  return (
    <>
      {signInStatus && user !== null && selectedEvents !== null ? (
        <Layout>
          <div className="mt-12 relative z-30">

            <h1 className="font-pop p-2 font-bold mb-5 text-center  text-lg xsm:text-xl md:text-2xl xl:text-3xl">
              Hi, {user.name} Lorem ipsum dolor <br />sit amet, consectetur adipiscing elit.
            </h1>
            <div className="flex flex-col items-center justify-center xl:relative">

              <div className=" flex flex-wrap justify-center items-center xl:relative xl:left-12">
                {events.map((event, i) => (
                  <EventCard
                    name={event}
                    key={i}
                    isActive={() => selectedEvents.includes(event)}
                  />
                ))}
              </div>




              <button className=" mt-3 bg-updatebtn w-24 rounded-md font-pop text-sm h-6 xsm:text-lg xsm:h-8" onClick={() => updateEvents(selectedEvents, toast)}>Update</button>
            </div>



            <div className="mt-12 ml-2 mb-20 lg:mt-20 xl:mt-32">
              <h1 className="font-pop font-bold text-lg xsm:text-xl md:text-2xl xl:text-3xl">If you encounter any problems, <br />kindly refer to the instructions below.</h1>

              <div className="font-sand flex flex-col gap-2 mt-5 lg:mt-7">
                <h2 className="font-bold xsm:text-lg">
                  Instructions:-
                </h2>
                <ul className="instructions list-decimal pl-4 font-medium text-secondarygray flex flex-col gap-1 md:gap-2 lg:gap-3">
                  <li>Just click and select the event boxes, whichever events you are interested in and then just click on update.</li>
                  <li>If you have any further problems related to something,<br />
                    please do not hesitate to contact us and we will be ready to help you out.</li>
                  <li>{!viewPrompts ? "Promps are now available just click on the View Prompts Button Below" : "Information for the prompts will be available later on."}</li>
                  <li>As for any new updates, keep an eye out for annoucements on our <span className="text-link"> Halolegion’s Discord Server</span>.</li>
                  <li>Besides, have a great time.</li>
                </ul>

              </div>
            </div>
            <div className="flex items-center justify-center">

              {viewPrompts ? (
                <a
                  href="https://dyinginthedarkness.herokuapp.com/halo-prompts"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-viewprompsbtn w-full flex items-center justify-center h-28 text-xl text-white font-pop font-medium underline shadow-spread-md xsm:text-2xl xsm:h-32 sm:h-44 xl:h-64 lg:h-52 lg:text-3xl xl:text-4xl"
                >
                  View Prompts
                </a>
              ) : (
                ""
              )}
            </div>
          </div>
        </Layout>
      ) : (
        <Redirect to={redirect} />
      )
      }
    </>
  );
};

export default Dashboard;