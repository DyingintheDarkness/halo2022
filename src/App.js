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
  Resources,
  Contact,
  Team,
  Legal,
} from "./pages/exports";
import Loading from "./components/Loading";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSetSharedState } from "./statedrive";
import { toast, ToastContainer } from "react-toastify";

const CloseButton = ({ closeToast }) => (
  <i
    className="Toastify__close-button"
    onClick={closeToast}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      style={{ msFilter: "" }}
      fill="rgba(0, 0, 0, 1)"
    >
      <path d="M16.192 6.344l-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
    </svg>
  </i>
);




function App() {
  const setUser = useSetSharedState(userAtom);
  const setSignInStatus = useSetSharedState(signInStatusAtom);
  const setSelectedEvents = useSetSharedState(selectedEventsAtom);
  const setRedirect = useSetSharedState(redirectAtom);


  const contextClass = {
    success: "success",
    error: "error",
    info: "info",
    default: "",
  };


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
      if (data) {

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
        newestOnTop={true}
        pauseOnHover={false}
        limit={3}
        closeOnClick
        closeButton={CloseButton}
        rtl={false}

        toastClassName={({ type }) => contextClass[type || "default"] +
          " defaults relative flex justify-start items-center h-10 p-1 pl-2 bg-black font-pop"
        }
        bodyClassName={() => "flex"}
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
            <Route path="*" component={() => { return <div className="font-sans font-medium pl-1">404 - Page Not Found</div> }} />x
          </Switch>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
