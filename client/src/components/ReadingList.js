import React, { useState, useEffect } from "react";
import ReadingListLink from "./ReadingListLink";
import AddNewArticleForm from "./AddNewArticleForm";

import BASE_URL from "../Config";

function ReadingList({ user }) {
  const [articleList, setArticleList] = useState([]);

  const { id } = user;

  useEffect(() => {
    fetch(`${BASE_URL}/users/${id}/articles`)
      .then((res) => res.json())
      .then((listOfSavedArticles) => {
        console.log("User id: ", id);
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
      <AddNewArticleForm user={user} />

      <div className="tableContainer">
        <table className="readingListTable">
          <thead>
            <tr>
              <th>Headline</th>
              <th>URL</th>
              <th>Newsletter Date</th>
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
