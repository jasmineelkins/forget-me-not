import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../Config";

function Navbar({ user, setUser }) {
  const navigate = useNavigate();

  // log out user by deleting session
  async function deleteSession() {
    const response = await fetch(`${BASE_URL}/logout`, { method: "DELETE" });
    if (response.ok) {
      setUser(null);
      console.log(response);
    }
    navigate("/");
  }
  return (
    <div className="navBarContainer">
      <div className="welcomeMessage">
        {user ? <h3>Hi, {user.name}</h3> : <span></span>}
      </div>

      <div className="navBarLinks">
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/reading-list">Reading List</Link>
        <Link to="/">Newsletter</Link>
        {/* <Link to="/random">Random</Link> */}

        <button onClick={deleteSession} className="btn logoutBtn">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;
