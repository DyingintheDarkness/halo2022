import "./styles/app.css";
import "./styles/custom.css";
import { useState, Suspense, useEffect } from "react";

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

import { userAtom, signInStatusAtom,redirectAtom } from "./statedrive/atoms";
import { useSharedState, useSetSharedState } from "./statedrive/index";

import Loading from "./components/Loading";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { checkToken, login } from "./components/authentication";
// import ProtectedRoute from "./components/protectedRoute";

function App() {
  
  const setUser = useSetSharedState(userAtom);
  const setRedirect = useSetSharedState(redirectAtom);
  const setSignInStatus = useSetSharedState(signInStatusAtom);
  
useEffect(() => {

  try {
    if (checkToken()) {
      login(undefined, undefined, undefined, setUser, setSignInStatus);
      setRedirect("/dashboard")
    }
  } catch (err) {
    localStorage.removeItem("token");
    setSignInStatus(false);
    setUser(null);
    setRedirect("/join")

  }
},[])

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
