import React, { useState } from "react";
import { MdOpenInNew } from "react-icons/md";

function ArticleListItem({ article }) {
  let textPreview;

  if (article.text) {
    textPreview = `${article.text.slice(0, 60)}...`;
  } else {
    textPreview = null;
  }
  return (
    <div className="articleListItemContainer">
      <h4>{article.headline}</h4>
      <p>{textPreview}</p>

      <a href={article.url} target="_blank" rel="noreferrer">
        <MdOpenInNew />
      </a>
    </div>
  );
}

export default ArticleListItem;
