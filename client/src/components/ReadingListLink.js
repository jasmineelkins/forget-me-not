import React, { useState } from "react";

function ReadingListLink({ article }) {
  function handleClick() {
    // DELETE article
  }

  // add a way from user to UPDATE article Read By date
  return (
    <tr className="readingListLinkRow">
      <td>Headline</td>
      <td>
        <a href={article.url} target="_blank" rel="noreferrer">
          {article.url}
        </a>
      </td>
      <td>{article.read_by_date}</td>
      <td>{article.created_at}</td>
      <td>
        <button onclick={handleClick}>X</button>
      </td>
    </tr>
  );
}

export default ReadingListLink;
