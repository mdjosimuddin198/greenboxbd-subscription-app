import React, { use, useState } from "react";
import NavBar from "../components/NavBar";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from "react-helmet";
import Lottie from "lottie-react";
import signUplottie from "../assets/signUp.json";

const Login = () => {
  const { loginUser, handlegoogle } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, password);

    loginUser(email, password)
      .then((result) => {
        // console.log(result);
        navigate(`${location.state ? location.state : "/"}`);
        toast.success(`Loged In SuccessFully `);
      })
      .catch((error) => {
        console.log(error);
        toast.error("error found");
      });
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    const email = document.querySelector('input[name="email"]').value;
    navigate("/auth/login/forget-password", { state: { email } });
  };
  const handleGoogoleLogin = () => {
    // console.log("hello login ");
    handlegoogle()
      .then((result) => {
        navigate(`${location.state ? location.state : "/"}`);
        toast.success(`Loged In SuccessFully `);
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
        toast.error("error found");
      });
  };
  return (
    <>
      <Helmet>
        <title>Login page | GreenBox BD </title>
      </Helmet>
      <NavBar></NavBar>
      <section className="flex flex-col md:flex-row justify-around">
        <div className="md:w-[450px] w-[200px] mx-auto">
          <Lottie animationData={signUplottie} loop={true}></Lottie>
        </div>
        <div className="card bg-base-100 mx-auto my-20 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleLogin} className="fieldset">
              <label className="label text-xl">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="label text-xl">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />
              <div>
                <Link
                  to="/auth/login/forget-password"
                  state={{ email }}
                  onClick={handleForgotPassword}
                  className="link link-hover text-blue-600"
                >
                  Forgot password?
                </Link>
              </div>
              <button className="btn btn-neutral mt-4">LogIn Now</button>
              <p className="text-sm text-base-200">
                Don't have account yet{" "}
                <Link className="text-blue-400 underline" to="/auth/register">
                  {"   "}
                  Register Now{" "}
                </Link>
              </p>
            </form>
            {/* Google */}
            <button
              onClick={handleGoogoleLogin}
              className="btn bg-white text-black border-[#e5e5e5]"
            >
              <FcGoogle></FcGoogle>
              Login with Google
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
