import React, { useState, useEffect } from "react";
import { BsCheck2Square, BsSquare } from "react-icons/bs";

import BASE_URL from "../Config";

function Profile({ user, setUser }) {
  const defaultProfileForm = {
    name: user.name,
    username: user.username,
    about: user.about,
    image:
      "https://res.cloudinary.com/dbl7owtdh/image/upload/v1652387229/cartoon-cat-g3531c4ee5_1920_pwmyxe.png",
    email: user.email,
    location: user.location,
    birthday: user.birthday,
    email_newsletter: user.receive_newsletter,
  };

  const [editModeOff, setEditModeOff] = useState(true);
  const [profileFormData, setProfileFormData] = useState({
    defaultProfileForm,
  });
  const [isChecked, setIsChecked] = useState(user.receive_newsletter);

  useEffect(() => {
    fetch(`${BASE_URL}/users/${user.id}`)
      .then((res) => res.json())
      .then((currentUserObj) => {
        // console.log("current user: ", currentUserObj);
        setUser(currentUserObj);
        setProfileFormData(defaultProfileForm);
      })
      .catch((error) => console.log(error.message));
  }, [setUser, user.id]);

  function handleClick(e) {
    // click to toggle form
    setEditModeOff(false);
    console.log("edit mode ON");
  }

  function handleChange(e) {
    // setIsChecked(!isChecked);

    console.log(e.target.value, e.target.type);

    if (e.target.type === "checkbox") {
      setProfileFormData({
        ...profileFormData,
        [e.target.name]: e.target.checked,
      });
    } else {
      setProfileFormData({
        ...profileFormData,
        [e.target.name]: e.target.value,
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(profileFormData);

    // UPDATE user info
    fetch(`${BASE_URL}/users/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: profileFormData.name,
        username: profileFormData.username,
        about: profileFormData.about,
        image:
          "https://res.cloudinary.com/dbl7owtdh/image/upload/v1652387229/cartoon-cat-g3531c4ee5_1920_pwmyxe.png",
        email: profileFormData.email,
        location: profileFormData.location,
        birthday: profileFormData.birthday,
        receive_newsletter: profileFormData.receive_newsletter,
      }),
    })
      .then((res) => res.json())
      .then((updatedUserObj) => {
        console.log("Updated user: ", updatedUserObj);
        setUser(updatedUserObj);
        setProfileFormData(updatedUserObj);
      })
      .catch((error) => console.log(error.message));

    // reset form to show user data
    setProfileFormData({
      name: profileFormData.name,
      username: profileFormData.username,
      about: profileFormData.about,
      image:
        "https://res.cloudinary.com/dbl7owtdh/image/upload/v1652387229/cartoon-cat-g3531c4ee5_1920_pwmyxe.png",
      email: profileFormData.email,
      location: profileFormData.location,
      birthday: profileFormData.birthday,
      receive_newsletter: isChecked,
    });

    //turn off edit mode - back to profile, not form
    setEditModeOff(true);
  }

  // function handleCheckedClick(e) {
  //   setIsChecked(!isChecked);

  //   // PATCH checkbox input data
  //   fetch(`${BASE_URL}/users/${user.id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //       "Access-Control-Allow-Origin": "http://localhost:3002",
  //     },
  //     body: JSON.stringify({
  //       receive_newsletter: !isChecked,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log("PATCH after checkbox: ", data))
  //     .catch((error) => console.log(error.message));
  // }

  const formattedBirthday = user.birthday ? user.birthday.slice(5, 10) : null;

  return (
    <div className="profileContainer">
      {/* <h2>Profile</h2> */}
      <img
        src="https://res.cloudinary.com/dbl7owtdh/image/upload/v1652387229/cartoon-cat-g3531c4ee5_1920_pwmyxe.png"
        alt="cartoon cat"
        className="avatar"
      ></img>
      <span className="dateJoined">Joined {user.created_at}</span>

      {editModeOff ? (
        <div className="profileInnerDiv">
          <div className="profileRow">
            <span className="profileLabel">Name</span>
            <div className="rightSpanDiv">
              <span className="profileSpan">{user.name}</span>
            </div>
          </div>

          <div className="profileRow">
            <span className="profileLabel">Username</span>
            <div className="rightSpanDiv">
              <span className="profileSpan">{user.username}</span>
            </div>
          </div>

          <div className="profileRow">
            <span className="profileLabel">Birthday</span>
            <div className="rightSpanDiv">
              <span className="profileSpan">{formattedBirthday}</span>
            </div>
          </div>

          <div className="profileRow">
            <span className="profileLabel">Location</span>
            <div className="rightSpanDiv">
              <span className="profileSpan">{user.location}</span>
            </div>
          </div>

          <div className="profileRow">
            <span className="profileLabel">Email</span>
            <div className="rightSpanDiv">
              <span className="profileSpan">{user.email}</span>
            </div>
          </div>

          <div className="profileRow">
            <span className="profileLabel">Email Newsletter?</span>
            <div className="rightSpanDiv">
              <span className="profileSpan">
                {user.receive_newsletter ? <BsCheck2Square /> : <BsSquare />}
              </span>
              {/* <span className="profileSpan">
                <input
                  name="newsletter"
                  type="checkbox"
                  checked={user.receive_newsletter}
                  onChange={(e) => handleChange(e)}
                ></input>
              </span> */}
            </div>
          </div>

          {/* <div className="profileRow about">
            <span className="profileLabel about">About</span>
            <div className="rightSpanDiv">
              <span className="profileSpan about">{user.about}</span>
            </div>
          </div> */}

          <button onClick={(e) => handleClick(e)}>Edit Profile</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="profileForm">
          <div className="formRow">
            <label>Name</label>
            <input
              name="name"
              value={profileFormData.name}
              onChange={(e) => handleChange(e)}
            ></input>
          </div>

          <div className="formRow">
            <label>Username</label>
            <input
              name="username"
              value={profileFormData.username}
              onChange={(e) => handleChange(e)}
            ></input>
          </div>

          <div className="formRow">
            <label>Birthday</label>
            <input
              name="birthday"
              value={profileFormData.birthday}
              onChange={(e) => handleChange(e)}
            ></input>
          </div>

          <div className="formRow">
            <label>Location</label>
            <input
              name="location"
              value={profileFormData.location}
              onChange={(e) => handleChange(e)}
            ></input>
          </div>

          <div className="formRow">
            <label>Email</label>
            <input
              name="email"
              value={profileFormData.email}
              onChange={(e) => handleChange(e)}
            ></input>
          </div>

          {/* <div className="formRow">
            <label>Email Newsletter?</label>
            <input
              name="receive_newsletter"
              type="text"
              value={profileFormData.receive_newsletter}
              onChange={(e) => handleChange(e)}
            ></input>
          </div> */}

          <div className="formRow checkboxRow">
            <label>Email Newsletter?</label>
            <input
              id="checkbox"
              name="receive_newsletter"
              type="checkbox"
              checked={
                profileFormData.receive_newsletter === true ? true : false
              }
              onChange={(e) => handleChange(e)}
            ></input>
          </div>

          {/* <div className="formRow">
            <label>About</label>
            <textarea
              name="about"
              value={profileFormData.about}
              onChange={(e) => handleChange(e)}
            ></textarea>
          </div> */}

          <button type="submit">Save changes</button>
        </form>
      )}
    </div>
  );
}

export default Profile;
