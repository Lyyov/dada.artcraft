import React, { Fragment, lazy } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
const Home = lazy(() =>
  import(/* webpackChunkName: "Home" */ "../components/pages/Home/Home")
);
const Services = lazy(() =>
  import(
    /* webpackChunkName: "Services" */ "../components/pages/Services/Services"
  )
);
const Saula = lazy(() =>
  import(/* webpackChunkName: "Saula" */ "../components/pages/Projects/Saula")
);
const Sagro = lazy(() =>
  import(/* webpackChunkName: "Sagro" */ "../components/pages/Projects/Sagro")
);
const Mancomm = lazy(() =>
  import(
    /* webpackChunkName: "Mancomm" */ "../components/pages/Projects/Mancomm"
  )
);
const Banners = lazy(() =>
  import(
    /* webpackChunkName: "Banners" */ "../components/pages/Projects/Banners"
  )
);
const BeautyOffice = lazy(() =>
  import(
    /* webpackChunkName: "[request]" */ "../components/pages/Projects/BeautyOffice"
  )
);
const Projects = lazy(() =>
  import(
    /* webpackChunkName: "[request]" */ "../components/pages/Projects/Projects"
  )
);
const Prgisc = lazy(() =>
  import(
    /* webpackChunkName: "[request]" */ "../components/pages/Projects/Prgisc"
  )
);
import { About, Branding, Contact, Brief } from "../components/pages";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/projects",
    component: Projects,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/contacts",
    component: Contact,
  },
  {
    path: "/brief",
    component: Brief,
  },
  {
    path: "/services",
    component: Services,
  },
  {
    path: "/saula",
    component: Saula,
    // routes: [
    //   {
    //     path: "/tacos/bus",
    //     component: Bus
    //   },
    //   {
    //     path: "/tacos/cart",
    //     component: Cart
    //   }
    // ]
  },
  {
    path: "/sagro",
    component: Sagro,
  },
  {
    path: "/prgisc",
    component: Prgisc,
  },
  {
    path: "/mancomm",
    component: Mancomm,
  },
  {
    path: "/banners",
    component: Banners,
  },
  {
    path: "/branding",
    component: Branding,
  },
  {
    path: "/beauty-office",
    component: BeautyOffice,
  },
];

function CustomRoutes() {
  return (
    <Fragment>
      <Routes>
        {routes.map((route, i) => {
          return (
            <Route path={route.path} element={<route.component />} key={i} />
          );
        })}
      </Routes>
    </Fragment>
  );
}
export default CustomRoutes;
