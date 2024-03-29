import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../Config";

function Login({ user, setUser }) {
  const defaultFormState = { username: "", password: "" };

  const [formData, setFormData] = useState(defaultFormState);
  const [passwordShown, setPasswordShown] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const passwordShownIcon =
    passwordShown === true ? <AiFillEye /> : <AiFillEyeInvisible />;

  const errorsToDisplay = error === null ? null : error;

  function togglePassword(e) {
    e.preventDefault();
    setPasswordShown(!passwordShown);
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    createUserSession();

    setFormData(defaultFormState);
  }

  // POST request: log in user by creating a session
  async function createUserSession() {
    try {
      const response = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
        }),
      });

      const userObj = await response.json();

      if (userObj.username) {
        navigate("/");
        setUser(userObj);
        setError(null);
      } else {
        if (userObj.error) {
          setError(userObj.error.login);
        } else {
          setError(null);
        }

        setUser(null);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="authFormContainer">
      <form onSubmit={(e) => handleSubmit(e)} className="authForm">
        <div className="formRow">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>

        <div className="formRow">
          <label>Password</label>
          <input
            type={passwordShown ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>

        <div className="formButtonDiv">
          <button onClick={(e) => togglePassword(e)}>
            {passwordShownIcon}
          </button>
          <button type="submit">Submit</button>
        </div>

        <span className="errorMessage">{errorsToDisplay}</span>
      </form>
    </div>
  );
}

export default Login;
