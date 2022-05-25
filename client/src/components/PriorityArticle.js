import React, { useState } from "react";
import { MdOpenInNew } from "react-icons/md";

function PriorityArticle({ article }) {
  console.log(article);
  return (
    <div className="priorityArticleContainer">
      <h4>{article.title}</h4>
      <img src={article.image} alt="placeholder" />
      <p>{article.text}</p>
      <a href={article.url} target="_blank" rel="noreferrer">
        <MdOpenInNew />
      </a>
    </div>
  );
}

export default PriorityArticle;
