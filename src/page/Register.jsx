import React, { useState } from "react";
import { Link } from "react-router";

const Register = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg(false);
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const password = form.password.value;
    const email = form.email.value;

    if (password.length < 6) {
      setErrorMsg("passworb must be 6 characters or longer ");
    } else if (!/[A-Z]/.test(password)) {
      setErrorMsg("Password must contain at least one uppercase letter.");
    } else if (!/[a-z]/.test(password)) {
      setErrorMsg(" Password must contain at least one lowercase letter.");
    } else {
      setSuccessMsg(true);
    }

    console.log(name, photo, password, email);
    return;
  };
  return (
    <>
      <div className="card bg-base-100 mx-auto my-20 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleRegister} className="fieldset">
            {/* name  */}
            <label className="label text-xl">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Name"
              required
            />
            {/* photourl  */}
            <label className="label text-xl">PhotoURL</label>
            <input
              type="text"
              name="photo"
              className="input"
              placeholder="PhotoURL"
              required
            />
            {/* email */}
            <label className="label text-xl">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              required
            />
            {/* password */}
            <label className="label text-xl">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
              required
            />
            <div></div>
            <button className="btn btn-neutral mt-4">Register Now</button>
            <p className="text-sm text-base-200">
              Allready have account{" "}
              <Link className="text-blue-400 underline" to="/auth/login">
                {"   "}
                Login Now{" "}
              </Link>
            </p>
            {errorMsg && <p className="text-red-400">{errorMsg}</p>}
            {successMsg && (
              <p className="text-green-500">Account have Create SuccessFully</p>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
