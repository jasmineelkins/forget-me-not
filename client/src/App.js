import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthBar from "./components/AuthBar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Newsletter from "./components/Newsletter";
import ReadingList from "./components/ReadingList";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import RandomArticle from "./components/RandomArticle";

function App() {
  const [user, setUser] = useState(null);

  // auto log-in
  useEffect(() => {
    fetch(`/me`)
      .then((res) => res.json())
      .then((userObj) => {
        console.log("Current user: ", userObj);
        if (userObj.username) {
          setUser(userObj);
        }
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div className="pageContainer">
      <div className="contentWrap">
        <BrowserRouter>
          {user ? (
            <>
              <NavBar user={user} setUser={setUser} />
              <Header />
            </>
          ) : (
            <>
              <Header />
              <AuthBar user={user} setUser={setUser} />
            </>
          )}

          <Routes>
            {user ? (
              <>
                <Route path="/" element={<Newsletter user={user} />}></Route>
                <Route
                  path="/login"
                  element={<Login user={user} setUser={setUser} />}
                ></Route>
                <Route
                  path="/profile"
                  element={<Profile user={user} setUser={setUser} />}
                ></Route>
                <Route
                  path="/reading-list"
                  element={<ReadingList user={user} />}
                ></Route>
                <Route
                  path="/random"
                  element={<RandomArticle user={user} />}
                ></Route>
              </>
            ) : (
              <>
                <Route path="/" element={<HomePage user={user} />}></Route>
                <Route
                  path="/signup"
                  element={<Signup user={user} setUser={setUser} />}
                ></Route>

                <Route
                  path="/login"
                  element={<Login user={user} setUser={setUser} />}
                ></Route>
              </>
            )}
          </Routes>

          {/* <Footer /> */}
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
