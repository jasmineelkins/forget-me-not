import React, { useState, useEffect } from "react";
import Article from "./Article";
import PriorityArticle from "./PriorityArticle";

function Newsletter({ user }) {
  const [articleList, setArticleList] = useState([]);
  const [priorityArticle, setPriorityArticle] = useState({});

  const { id } = user;

  useEffect(() => {
    fetch(`/users/${id}/articles`)
      .then((res) => res.json())
      .then((listOfSavedArticles) => {
        console.log("Saved article list: ", listOfSavedArticles);
        setArticleList(listOfSavedArticles);

        // const selectPriorityArticle = articleList.filter(
        //   (article) => article.id === 31
        // );
        // setPriorityArticle(selectPriorityArticle[0]);
      })
      .catch((error) => console.log(error.message));
  }, [id]);

  const articlesToDisplay = articleList.map((article) => (
    <Article article={article} key={article.id} />
  ));

  const middleArticles = articlesToDisplay.slice(0, 4);

  const rightArticles = articlesToDisplay.slice(4, 7);

  return (
    <div className="newsletterContainer">
      {/* <h2>Newsletter</h2> */}
      <div className="newsletter">
        <div className="newsletterHeader item1">
          <div className="newsletterHoroscope"></div>
          <h3>Weekly</h3>
          <div className="newsletterWeather"></div>
        </div>

        <div className="newsletterLeft item2">
          <PriorityArticle article={priorityArticle} />
        </div>
        <div className="newsletterCenter item3">{middleArticles}</div>
        <div className="newsletterRight item4">{rightArticles}</div>
      </div>
    </div>
  );
}

export default Newsletter;
