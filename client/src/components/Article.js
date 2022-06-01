import React, { useState } from "react";
import { MdOpenInNew } from "react-icons/md";

function Article({ article }) {
  let textPreview;

  if (article.text) {
    textPreview = `${article.text.slice(0, 300)}...`;
  } else {
    textPreview = null;
  }
  return (
    <div className="articleContainer">
      <h4>{article.headline}</h4>
      <p>{textPreview}</p>
      <a href={article.url} target="_blank" rel="noreferrer">
        <MdOpenInNew className="openIcon" />
      </a>
    </div>
  );
}

export default Article;
