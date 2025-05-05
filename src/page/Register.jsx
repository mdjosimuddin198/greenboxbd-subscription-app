import React from "react";
import { Link } from "react-router";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = e.target.name.value;
    console.log(form, name);
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
            />
            {/* photourl  */}
            <label className="label text-xl">PhotoURL</label>
            <input type="text" className="input" placeholder="PhotoURL" />
            {/* email */}
            <label className="label text-xl">Email</label>
            <input type="email" className="input" placeholder="Email" />
            {/* password */}
            <label className="label text-xl">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div></div>
            <button className="btn btn-neutral mt-4">Login</button>
            <p className="text-sm text-base-200">
              Allready have account{" "}
              <Link className="text-blue-400 underline" to="/auth/login">
                {"   "}
                Login Now{" "}
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
