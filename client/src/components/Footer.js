import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";

function Footer(props) {
  return (
    <footer>
      <span>
        Designed & built by Jasmine Elkins{" "}
        <a
          href="https://github.com/jasmineelkins/forget-me-not"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="footerIcon" />
        </a>{" "}
        || May 2022
      </span>
    </footer>
  );
}

export default Footer;
