import React, { useState } from "react";
import { MdOpenInNew } from "react-icons/md";
import Newsletter from "./Newsletter";

function PriorityArticle({ article, currentNewsletter }) {
  const textPreview = article.text ? `${article.text.slice(0, 600)}...` : null;

  const staticImageSource =
    currentNewsletter.frequency === "weekly"
      ? "https://miro.medium.com/max/1400/0*l75ZKzIfE_jhTRpN.jpg"
      : "https://miro.medium.com/max/1400/0*eX34raKh7IzpEaVB";
  return (
    <div className="priorityArticleContainer">
      <h4>{article.headline}</h4>
      <img
        src={staticImageSource}
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
