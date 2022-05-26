import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";

function Footer(props) {
  return (
    <footer>
      Designed & built by Jasmine Elkins{" "}
      <a
        href="https://github.com/jasmineelkins"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub className="footerIcon" />
      </a>{" "}
      || May 2022
    </footer>
  );
}

export default Footer;
