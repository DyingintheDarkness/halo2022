import { lazy } from "react";

const Home = lazy(() => import("./Home/Home"));
const Join = lazy(() => import("./Join/Join"));
const Contact = lazy(() => import("./Contact/Contact"));
const Resources = lazy(() => import("./Resources/Resources"));
const Team = lazy(() => import("./Team/Team"));
const Legal = lazy(() => import("./Legal/Legal"));
const PageNotFound = lazy(() => import("./PageNotFound/PageNotFound"));
const Dashboard = lazy(() => import("./Dashboard/Dashboard"));

export { Home, Join, Dashboard, PageNotFound,Contact,Resources,Team,Legal };
