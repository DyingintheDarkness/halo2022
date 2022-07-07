import { lazy } from "react";

const Home = lazy(() => import("./Home/Home"));
const Contact = lazy(() => import("./Contact/Contact"));
const Resources = lazy(() => import("./Resources/Resources"));
const Team = lazy(() => import("./Team/Team"));
const Legal = lazy(() => import("./Legal/Legal"));
const Dashboard = lazy(() => import("./Dashboard/Dashboard"));

export { Home, Dashboard, Contact, Resources, Team, Legal };
