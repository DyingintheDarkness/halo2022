import "./styles/app.css";
import "./styles/custom.css";
import 'react-toastify/dist/ReactToastify.css';
import { Suspense} from "react";



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
  const contextClass = {
    success: "bg-green-200",
    error: "bg-red-200",
    info: "bg-blue-200",
    default: "bg-gray-200",

  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        toastClassName={({ type }) => contextClass[type || "default"] +
          " relative flex  justify-between items-center overflow-hidden cursor-pointer p-3 xsm:rounded-md sm:mt-8 mb-px font-medium font-pop text-black"
        }
        bodyClassName={() => "flex "}



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
