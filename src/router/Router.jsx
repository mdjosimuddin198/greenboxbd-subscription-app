import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Subscription from "../components/Subscription";
import Home from "../components/Home";
import AllPriceCard from "../components/AllPriceCard";
import PriceDetails from "../components/PriceDetails";
import Login from "../page/Login";
import Register from "../page/Register";
import PrivetRoute from "./PrivetRoute";
import ErrorPage from "../page/ErrorPage";
import Loading from "../components/Loading";
import MyProfile from "../components/MyProfile";
import ForgotPassword from "../page/ForgotPassword";
import PublicRoute from "./PublicRoute";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: async () => {
          const res = await fetch("/greenBoxData.json");
          const data = await res.json();
          return data;
        },
        Component: Home,
        hydrateFallbackElement: <Loading></Loading>,
      },

      {
        path: "/products",
        loader: async () => {
          const res = await fetch("/allProducts.json");
          const data = await res.json();
          return data;
        },
        Component: AllPriceCard,
      },

      {
        path: "green/:id",
        loader: async () => {
          const res = await fetch("/greenBoxData.json");
          const data = await res.json();
          return data;
        },
        element: (
          <PrivetRoute>
            <PriceDetails></PriceDetails>
          </PrivetRoute>
        ),
        hydrateFallbackElement: <Loading></Loading>,
      },
    ],
  },

  {
    path: "/auth/login",
    element: (
      <PublicRoute>
        <Login></Login>
      </PublicRoute>
    ),
  },
  {
    path: "/auth/login/forget-password",
    Component: ForgotPassword,
  },
  {
    path: "/auth/register",
    element: (
      <PublicRoute>
        <Register></Register>
      </PublicRoute>
    ),
  },
  {
    path: "/green_box_bd/profile",
    element: (
      <PrivetRoute>
        <MyProfile></MyProfile>
      </PrivetRoute>
    ),
  },
]);

export default Router;
