import "./styles/app.css";
import "./styles/custom.css";
import { Suspense, useEffect } from "react";

import {
  checkToken,
  getUser,
  logout,
} from "./components/authentication";
import {
  userAtom,
  signInStatusAtom,
  selectedEventsAtom,
  redirectAtom,
} from "./statedrive/atoms";

import {
  Home,
  Join,
  Dashboard,
  PageNotFound,
  Resources,
  Contact,
  Team,
  Legal,
} from "./pages/exports";

import Loading from "./components/Loading";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSetSharedState, useSharedState } from "./statedrive";

function App() {
  const setUser = useSetSharedState(userAtom);
  const setSignInStatus = useSetSharedState(signInStatusAtom);
  const setSelectedEvents = useSetSharedState(selectedEventsAtom);
  const setRedirect = useSetSharedState(redirectAtom);
  useEffect(() => {
    async function getData() {
      if (checkToken()) {
        const data = await getUser()
          .then((res) => {
            return res;
          })
          .catch((err) => {
            logout();
            setSignInStatus(false);
            setRedirect("/join");
            localStorage.setItem("redirect", "/join")
            setUser(null);
            setSelectedEvents([]);
            alert("Something Weird Happened");
            return false;
          });
        if (data) {
          setSignInStatus(true);
          setRedirect("/dashboard");
          setUser(data.data);
          setSelectedEvents(data.data.events);
          localStorage.setItem("events", JSON.stringify(data.data.events));
          localStorage.setItem("redirect", "/dashboard")
        }
      } else{
        localStorage.setItem("redirect", "/join")
        setRedirect("/join")
      }
    }
    getData();
    setSelectedEvents(JSON.parse(localStorage.getItem("events")));
    setRedirect(localStorage.getItem("redirect"))
  }, []);

  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/join" component={Join} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/resources" component={Resources} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/legal" component={Legal} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
