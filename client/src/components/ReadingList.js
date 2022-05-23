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

  //   const articlesToDisplay = articleList.map((article) => (
  //     <a href={article.url} key={article.id}>
  //       {" "}
  //       {article.url}
  //     </a>
  //   ));

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
      {/* <h2>User's Reading List</h2> */}
      {/* <div className="readingListHeaders">
        <h3>Headline</h3>
        <h3>URL</h3>
        <h3>Read By</h3>
        <h3>Date Added</h3>
      </div> */}
      {/* <div className="articleLinksContainer">{articlesToDisplay}</div> */}

      <div className="tableContainer">
        <table className="readingListTable">
          <tr>
            <th>Headline</th>
            <th>URL</th>
            <th>Read By</th>
            <th>Date Added</th>
            <th>Delete?</th>
          </tr>
          {articlesToDisplay}
        </table>
      </div>
    </div>
  );
}

export default ReadingList;
