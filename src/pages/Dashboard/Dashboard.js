import React, { useContext, useState, useEffect } from "react";
import { Link, useHistory, Redirect } from "react-router-dom";
import { AuthContext } from "../../components/AuthContext";
import { updateEvents } from "../../components/authentication";
import Layout from "../../components/Layout";
import Loading from "../../components/Loading";
import { useSharedState, useSetSharedState } from "../../statedrive/index";
import { userAtom, signInStatusAtom,redirectAtom } from "../../statedrive/atoms";
const Dashboard = () => {
  const [user, setUser] = useSharedState(userAtom);
  const [signInStatus, setSignInStatus] = useSharedState(signInStatusAtom);

  const events = [
    "coding",
    "writing",
    "designing",
    "pitching",
    "gaming",
    "quiz",
  ];
  const [viewPrompts, setViewPrompts] = useState(false);
  const [redirect,setRedirect] = useSharedState(redirectAtom)
  const history = useHistory()
  const addEvent = (event, i, e) => {};
  setInterval(() => {
    const current = new Date().getTime();
    const past = new Date("Sep 23 2021 19:36:40").getTime();
    if (current > past) {
      setViewPrompts(true);
    }
  }, 1000);
  useEffect(() => {
    if (!signInStatus) {
      history.push(redirect)
    }
  });

  return (
    <>
      {signInStatus ? (
        <Layout>
          <div>
            <h1>{user.name}</h1>
            <h2>{user.events}</h2>
            <div style={{ display: "flex", gap: "2rem" }}>
              {events.map((event, i) => {
                return (
                  <button
                    key={i}
                    style={{ background: "" }}
                    onClick={() => addEvent(event, i)}
                    class="event-btns"
                  >
                    {event}
                  </button>
                );
              })}
            </div>
            <br />
            <br />
            <br />
            <button onClick={() => updateEvents(["Lol"])}>Update</button>

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
              <div className="h-screen w-screen bg-white">
              <Loading />
              </div>
            )}
          </div>
        </Layout>
      ) : (
        ""
      )}
    </>
  );
};

export default Dashboard;
