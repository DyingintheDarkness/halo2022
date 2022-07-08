import "./styles/app.css";
import "./styles/custom.css";
import 'react-toastify/dist/ReactToastify.css';
import { Suspense, useEffect } from "react";
import {
  userAtom,
  signInStatusAtom,
  selectedEventsAtom,
  redirectAtom,
} from "./statedrive/atoms";
import { useSetSharedState } from "./statedrive/index";
import {
  Home,
  Dashboard,
  Resources,
  Contact,
  Team,
  Legal,
} from "./pages/exports";
import Loading from "./components/Loading";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

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

  }


  useEffect(() => {
    getData();
    setSelectedEvents(JSON.parse(localStorage.getItem("events")));
    setRedirect(localStorage.getItem("redirect"))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        icon={false}
        newestOnTop={true}
        pauseOnHover={false}
        limit={3}
        closeOnClick
        closeButton={CloseButton}
        rtl={false}
        toastClassName={({ type }) => contextClass[type || "default"] +
          " defaults relative flex justify-start items-center h-16 p-1 pl-2 font-sarabun mb-2 text-lg"
        }
        bodyClassName={() => "flex"}
      ></ToastContainer>

      <Router>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/" component={Home} />
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
