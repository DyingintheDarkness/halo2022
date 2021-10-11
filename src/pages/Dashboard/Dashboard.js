import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { checkToken, updateEvents } from "../../components/authentication";
import Layout from "../../components/Layout";
import Loading from "../../components/Loading";

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
        <Layout title="Dashboard">
          <div>
            <h1>{user.name}</h1>

            <div className="flex gap-2">
              {events.map((event, i) => (
                <EventCard
                  name={event}
                  key={i}
                  isActive={() => selectedEvents.includes(event)}
                />
              ))}
            </div>
            <br />
            <br />
            <br />
            <button onClick={() => updateEvents(selectedEvents)}>Update</button>

            {viewPrompts ? (
              <Link
                to={{
                  pathname:
                    "https://dyinginthedarkness.herokuapp.com/halo-prompts",
                }}
                target="_blank"
              >
                View Prompts
              </Link>
            ) : (
              ""
            )}
          </div>
        </Layout>
      ) : (
        <Redirect to={redirect} />
      )}
    </>
  );
};

export default Dashboard;
