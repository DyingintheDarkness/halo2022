import "./styles/app.css";
import "./styles/custom.css";
import { Suspense, useEffect } from "react";

import {
  checkToken,
  getUser,
  login,
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
import { useSetSharedState } from "./statedrive";

function App() {
  const setUser = useSetSharedState(userAtom);
  const setSignInStatus = useSetSharedState(signInStatusAtom);
  const setSelectedEvents = useSetSharedState(selectedEventsAtom);
  const setRedirect = useSetSharedState(redirectAtom);

  useEffect(() => {

    if (checkToken()) {
      if (checkToken()) {
        getUser().then((res) => {
          setRedirect("/dashboard");
          setSignInStatus(true);
          setUser(res.data);
          return setSelectedEvents(res.data.events);
        });
      }
    }

    
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
