import React, { useState, useEffect } from "react";
import ReadingListLink from "./ReadingListLink";
import AddNewArticleForm from "./AddNewArticleForm";
import BASE_URL from "../Config";

function ReadingList({ user }) {
  const [articleList, setArticleList] = useState([]);
  const [progressMessage, setProgressMessage] = useState();

  const { id } = user;

  useEffect(() => {
    getUserArticles();
  }, [id, setArticleList]);

  async function getUserArticles() {
    try {
      const response = await fetch(`${BASE_URL}/users/${id}/articles`);
      const listOfSavedArticles = await response.json();

      console.log("Saved article list: ", listOfSavedArticles);
      setArticleList(listOfSavedArticles);
    } catch (error) {
      console.log(error.message);
    }
  }

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
      <AddNewArticleForm
        user={user}
        articleList={articleList}
        setArticleList={setArticleList}
        progressMessage={progressMessage}
        setProgressMessage={setProgressMessage}
      />

      {articleList.length === 0 ? (
        <span className="noArticlesYetSpan">No articles to display yet</span>
      ) : (
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
      )}

      {/* <div className="toastContainer" style={{ position: "relative" }}>
        <div
          className="progressMessage"
          style={{
            position: "absolute",
            zIndex: 100,
            top: 20,
            left: 0,
            right: 0,
            background: "white",
            transition: "1s ease all",
            opacity: progressMessage ? 0.8 : 0,
          }}
        >
          {progressMessage}
        </div> */}
      {/* </div> */}
    </div>
  );
}

export default ReadingList;
