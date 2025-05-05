import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Subscription from "../components/Subscription";
import Home from "../components/Home";
import AllPriceCard from "../components/AllPriceCard";
import PriceDetails from "../components/PriceDetails";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <h3>error found</h3>,
    children: [
      {
        index: true,
        loader: async () => {
          const res = await fetch("/greenBoxData.json");
          const data = await res.json();
          return data;
        },
        Component: Home,
      },
      {
        path: "/about",
        element: <p>page not found </p>,
      },
      {
        path: "/cart",
        element: <p>cart section </p>,
      },
      {
        path: "green/:id",
        loader: async () => {
          const res = await fetch("/greenBoxData.json");
          const data = await res.json();
          return data;
        },
        Component: PriceDetails,
      },
    ],
  },
]);

export default Router;
