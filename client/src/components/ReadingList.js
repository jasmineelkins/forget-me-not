import React, { useState, useEffect } from "react";
import ReadingListLink from "./ReadingListLink";

function ReadingList({ user }) {
  const [articleList, setArticleList] = useState([]);

  const { id } = user;

  useEffect(() => {
    fetch(`/users/${id}/articles`)
      .then((res) => res.json())
      .then((listOfSavedArticles) => {
        console.log("Saved article list: ", listOfSavedArticles);
        setArticleList(listOfSavedArticles);
      })
      .catch((error) => console.log(error.message));
  }, [id]);

  const articlesToDisplay = articleList.map((article) => (
    <ReadingListLink
      article={article}
      key={article.id}
      articleList={articleList}
      setArticleList={setArticleList}
    />
  ));

  return (
    <div className="readingListContainer">
      <div className="tableContainer">
        <table className="readingListTable">
          <thead>
            <tr>
              <th>Headline</th>
              <th>URL</th>
              <th>Read By</th>
              <th>Date Added</th>
              <th>Delete?</th>
            </tr>
          </thead>

          <tbody>{articlesToDisplay}</tbody>
        </table>
      </div>
    </div>
  );
}

export default ReadingList;
