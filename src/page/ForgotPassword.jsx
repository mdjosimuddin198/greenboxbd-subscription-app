import React, { useEffect, useState } from "react";
import { sendPasswordResetEmail, getAuth } from "firebase/auth";
import { toast } from "react-toastify";
import { app } from "../firebase/firebase.config";
import NavBar from "../components/NavBar";
import { useLocation } from "react-router";
import { Helmet } from "react-helmet";

const auth = getAuth(app);

const ForgotPassword = () => {
  const location = useLocation();
  const [email, setEmail] = useState("");

  // লগইন পেজ থেকে যদি ইমেইল আসে
  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  const handleReset = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.warning("Please enter your email.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Reset link sent! Check your email.");
      window.open("https://mail.google.com", "_blank");
    } catch (error) {
      console.error(error);
      toast.error("Failed to send reset email");
    }
  };

  return (
    <>
      <Helmet>
        <title>Forgote Password|GreenBox BD</title>
      </Helmet>
      <NavBar />
      <div className="card bg-base-100 mx-auto my-20 w-full max-w-sm shadow-2xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-semibold">
            Forgot Password
          </h2>
          <form onSubmit={handleReset} className="space-y-4 mt-4">
            <label className="label text-xl">Email</label>
            <input
              type="email"
              className="input input-bordered w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
            <button type="submit" className="btn bg-base-200 text-white w-full">
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
