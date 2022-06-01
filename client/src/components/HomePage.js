import React, { useState } from "react";

function HomePage(props) {
  return (
    <div className="homeContainer">
      <div className="headerDiv">
        <h2>What is Forget Me Not?</h2>
      </div>

      <div className="innerText">
        <p>
          Forget Me Not is a Chrome extension that allows users to create custom
          reading lists. If you've ever saved a tab to the built-in reading list
          of your browser, you know you're never going to see it again. It falls
          into the abyss with the other 500 links you’ve saved for “when you
          have more time”...
        </p>

        <p>
          Forget Me Not is here to help: using our app, you can choose when you
          want to read each article. Not only does this allow you to customize
          and sort your reading list, but you will also receive weekly and
          monthly newsletters of all the articles you saved.
        </p>
      </div>

      <span>
        Click{" "}
        <a
          href="https://chrome.google.com/webstore/category/extensions"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>{" "}
        to download the Forget Me Not Extension
      </span>
    </div>
  );
}

export default HomePage;
