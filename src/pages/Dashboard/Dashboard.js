/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
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
  const [redirect, setRedirect] = useSharedState(redirectAtom);
  const [viewPrompts, setViewPrompts] = useState(false);
  const events = ["coding", "designing", "discussion", "gaming", "quiz"];

  useEffect(() => {
    const current = new Date().getTime();
    const past = new Date("Feb 4 2022 13:00:00").getTime();
    if (current > past) {
      setViewPrompts(true);
    }
  }, []);

  return (
    <>
      {signInStatus && user !== null && selectedEvents !== null ? (
        <Layout>
          <div className="mt-12 relative z-30 mb-10">
            <h1 className="text-center font-sarala font-bold xsm:text-xl md:text-2xl lg:text-4xl text-lg">
              Hi, {user.name}. Welcome to the club!
              <br />
              Glad to have you here!
            </h1>
            <div className="flex flex-col items-center justify-center mt-5">
              <div className="flex flex-col xsm:flex-row xsm:flex-wrap justify-center items-center lg:w-10/12 xl:w-8/12">
                {events.map((event, i) => (
                  <EventCard
                    name={event}
                    key={i}
                    isActive={() => selectedEvents.includes(event)}
                  />
                ))}
              </div>
              <button
                className="bg-green_1 font-roboto w-20 rounded-md h-7  "
                onClick={() => updateEvents(selectedEvents, toast)}
              >
                update
              </button>
            </div>

            <div className="flex flex-col gap-2 mt-10 ml-2">
              <h1 className="font-pro text-xl xsm:text-2xl lg:text-3xl">
                For any issues, please refer to the instructions below:-
              </h1>
              <ul className="instructions font-sarabun text-grey_1 pl-5 list-decimal xsm:text-lg">
                <li>
                  Just click and select the event boxes, whichever events you
                  are interested in and then just click on update.
                </li>
                <li>
                  If you have any further problems related to something,
                  <br />
                  please do not hesitate to contact us and we will be ready to
                  help you out.
                </li>
                <li>
                  {!viewPrompts
                    ? "Prompts are now available just click on the View Prompts Button Below"
                    : "Information for the prompts will be available later on."}
                </li>
                <li>
                  As for any new updates, keep an eye out for announcements on
                  our{" "}
                  <a
                    className="text-blue_2"
                    href="https://discord.gg/2TB4RJr4U7"
                    rel="noreferrer noopener"
                  >
                    {" "}
                    halolegion’s Discord Server
                  </a>
                  .
                </li>
                <li>Besides, have a great time.</li>
              </ul>
            </div>

            {viewPrompts ? (
              <div className="mt-10 flex justify-center items-center">
                <div className="flex w-80 xsm:w-8/12 lg:w-6/12 xsm:h-40 sm:h-56 sm:text-3xl items-center justify-center text-center h-36 bg-purple_1 font-sarala font-bold text-white text-2xl shadow-spread-md rounded-md">
                  <a
                    href="https://docs.google.com/document/d/1txBB--TMTfyLM5E_YWxDeU0u3re0lVP2e9XD3gcaYCY/edit?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    className=""
                  >
                    View Prompts
                  </a>
                </div>
              </div>
            ) : (
              ""
            )}

            <div className="mt-20"></div>
          </div>
        </Layout>
      ) : (
        <Redirect to={redirect} />
      )}
    </>
  );
};

export default Dashboard;
