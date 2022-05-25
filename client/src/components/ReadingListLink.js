import React, { useState } from "react";

function ReadingListLink({ article, articleList, setArticleList }) {
  // const [readByDate, setReadByDate] = useState();

  function handleClick() {
    const { id } = article;

    // DELETE article
    fetch(`/articles/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const updatedArticleList = articleList.filter(
          (article) => article.id !== id
        );
        setArticleList(updatedArticleList);
      })
      .catch((error) => console.log(error.message));
  }

  // add a way from user to UPDATE article Read By date
  return (
    <tr className="readingListLinkRow">
      <td className="linkTitle">{article.title}</td>
      <td>
        <a href={article.url} target="_blank" rel="noreferrer">
          {article.url}
        </a>
      </td>
      <td>{article.read_by_date}</td>
      <td>{article.created_at}</td>
      <td>
        <button onClick={handleClick}>X</button>
      </td>
    </tr>
  );
}

export default ReadingListLink;
