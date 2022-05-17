import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthBar from "./components/AuthBar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Newsletter from "./components/Newsletter";
import ReadingList from "./components/ReadingList";

function App() {
  const [user, setUser] = useState(null);

  // auto log-in
  // useEffect(() => {
  //   fetch(`/me`)
  //     .then((res) => res.json())
  //     .then((userObj) => {
  //       console.log(userObj);
  //       if (userObj.username) {
  //         setUser(userObj);
  //       }
  //     })
  //     .catch((error) => console.log(error.message));
  // }, []);

  return (
    <div className="pageContainer">
      <div className="contentWrap">
        {/* <BrowserRouter> */}
        <Header />
        <NavBar />
        <AuthBar />
        <ReadingList />
        <Newsletter />
        <Footer />
        {/* </BrowserRouter> */}
      </div>
    </div>
  );
}

export default App;
