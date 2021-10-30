import "./styles/app.css";
import "./styles/custom.css";
import 'react-toastify/dist/ReactToastify.css';
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
import { useSetSharedState } from "./statedrive";
import { toast, ToastContainer } from "react-toastify";

function App() {
  const setUser = useSetSharedState(userAtom);
  const setSignInStatus = useSetSharedState(signInStatusAtom);
  const setSelectedEvents = useSetSharedState(selectedEventsAtom);
  const setRedirect = useSetSharedState(redirectAtom);
  async function getData() {
    if (checkToken()) {
      const data = await getUser()
        .then((res) => {
          return res;
        })
        .catch((err) => {
          setSignInStatus(false);
          logout();
          setRedirect("/join");
          localStorage.setItem("redirect", "/join")
          setUser(null);
          setSelectedEvents([]);
          toast.error("Something Weird Happened")
          return false;
        });
if(data){

  setSignInStatus(true);
  setRedirect("/dashboard");
  setUser(data.data);
  setSelectedEvents(data.data.events);
  localStorage.setItem("events", JSON.stringify(data.data.events));
  localStorage.setItem("redirect", "/dashboard")
}

    } else {
      localStorage.setItem("redirect", "/join")
      setRedirect("/join")
    }
  }
  useEffect(() => {
    getData();
    setSelectedEvents(JSON.parse(localStorage.getItem("events")));
    setRedirect(localStorage.getItem("redirect"))
  }, []);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        className="mt-20"
        
        
      ></ToastContainer>
      
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
    </>
  );
}

export default App;
