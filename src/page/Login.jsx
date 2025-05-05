import React from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router";

const Login = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className="card bg-base-100 mx-auto my-20 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form className="fieldset">
            <label className="label text-xl">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label text-xl">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
            <p className="text-sm text-base-200">
              Don't have account yet{" "}
              <Link className="text-blue-400 underline" to="/auth/register">
                {"   "}
                Register Now{" "}
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
