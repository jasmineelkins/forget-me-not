import React, { useState } from "react";

function HomePage(props) {
  return (
    <div className="homeContainer">
      <h2>What is Forget Me Not?</h2>
      <p>
        Forget Me Not is a web application used in combination with a Chrome
        extension that allows users to create custom reading lists. If you've
        ever saved a tab to the built-in reading list of your browser, you know
        you're never going to see it again. It falls into the abyss with the
        other 500 links you’ve saved for “when you have more time”.
      </p>

      <p>
        Forget Me Not is here to help: using our app, you can set the date by
        which you want to read each article. Not only does this allow you to
        customize and sort your reading list, but you will also receive a weekly
        newsletter of all the articles saved to that week's list.
      </p>
    </div>
  );
}

export default HomePage;
