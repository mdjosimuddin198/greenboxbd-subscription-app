import React from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router";
import userIcon from "../assets/user.png";
import "../index.css";

const NavBar = () => {
  const links = (
    <>
      <NavLink className="ml-5 p-2 rounded-xl  text-xl" to="/">
        Home
      </NavLink>

      <NavLink className="ml-5  rounded-xl p-2 text-xl" to="/about">
        About
      </NavLink>
      <NavLink className="ml-5 p-2 rounded-xl text-xl" to="/cart">
        Cart
      </NavLink>
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className=" mx-2 lg:hidden">
              <FaBarsStaggered />
            </div>
            <ul
              tabIndex={0}
              className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className=" text-xl font-bold">
            GreenBox <span className="text-base-200"> BD</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">{links}</ul>
        </div>
        <div className="navbar-end gap-4">
          <img src={userIcon} alt="" />
          <a className="btn bg-base-200 text-white">Log In</a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
