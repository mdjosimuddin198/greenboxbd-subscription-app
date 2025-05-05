import React from "react";
import NavBar from "../components/NavBar";
import Home from "../components/Home";
import { Outlet } from "react-router";
import Banar from "../components/Banar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <header className="w-11/12  mx-auto">
        <NavBar></NavBar>
      </header>
      <main className="w-11/12 mx-auto py-6 ">
        <Outlet></Outlet>
      </main>
      <footer className="w-11/12 mx-auto">
        <Footer></Footer>
      </footer>
    </>
  );
};

export default MainLayout;
