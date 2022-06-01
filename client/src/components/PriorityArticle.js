import React, { useState } from "react";
import { MdOpenInNew } from "react-icons/md";

function PriorityArticle({ article }) {
  let textPreview;

  if (article.text) {
    textPreview = `${article.text.slice(0, 600)}...`;
  } else {
    textPreview = null;
  }
  return (
    <div className="priorityArticleContainer">
      <h4>{article.headline}</h4>
      <img
        src="https://miro.medium.com/max/1400/0*l75ZKzIfE_jhTRpN.jpg"
        alt="placeholder"
        className="priorityImage"
      />
      <p>{textPreview}</p>
      <a href={article.url} target="_blank" rel="noreferrer">
        <MdOpenInNew className="openIcon" />
      </a>
    </div>
  );
}

export default PriorityArticle;
