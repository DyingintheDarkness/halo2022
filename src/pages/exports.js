import { lazy } from "react";

const Home = lazy(() => import("./Home/Home"));
const Contact = lazy(() => import("./Contact/Contact"));
const Events = lazy(() => import("./Events/Events"));
const Resources = lazy(() => import("./Resources/Resources"));
const Team = lazy(() => import("./Team/Team"));
const Legal = lazy(() => import("./Legal/Legal"));
const Dashboard = lazy(() => import("./Dashboard/Dashboard"));
const Register = lazy(() => import("./Register/Register"));

export { Home, Dashboard, Contact, Events, Resources, Team, Legal,Register };
