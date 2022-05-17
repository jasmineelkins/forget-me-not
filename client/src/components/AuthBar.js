import React from "react";
import { Link } from "react-router-dom";

function AuthBar() {
  return (
    <>
      <div className="authBarContainer">
        <Link to="/">Home</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
      </div>
    </>
  );
}

export default AuthBar;
