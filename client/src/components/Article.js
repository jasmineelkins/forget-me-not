import React, { useState } from "react";
import { MdOpenInNew } from "react-icons/md";

function Article({ article }) {
  return (
    <div className="articleContainer">
      <h4>{article.title}</h4>
      <p>{article.text}</p>
      <a href={article.url} target="_blank" rel="noreferrer">
        <MdOpenInNew />
      </a>
    </div>
  );
}

export default Article;
