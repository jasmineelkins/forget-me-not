import React, { useState, useEffect } from "react";
import Article from "./Article";
import PriorityArticle from "./PriorityArticle";
import ArticleListItem from "./ArticleListItem";

function Newsletter({ user }) {
  const [articleList, setArticleList] = useState([]);
  // const [priorityArticle, setPriorityArticle] = useState({});

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

  // const articlesToDisplay = articleList.map((article, index) => {
  //   if (index < 5) {
  //     <Article article={article} key={article.id} />;
  //   } else if (index >= 5) {
  //     <ArticleListItem article={article} key={article.id} />;
  //   }
  // });

  // const middleArticles = articlesToDisplay.slice(0, 4);

  // const rightArticles = articlesToDisplay.slice(5, 10);

  //

  const selectPriorityArticle = articleList.filter(
    (article) => article.id === 47
  );

  console.log(selectPriorityArticle);
  const priorityToDisplay = selectPriorityArticle.map((article) => (
    <PriorityArticle article={article} key={article.id} />
  ));
  // setPriorityArticle(selectPriorityArticle[0]);

  const middleArticles = articleList.slice(0, 4);
  const middleArticlesToDisplay = middleArticles.map((article) => (
    <Article article={article} key={article.id} />
  ));

  const rightArticles = articleList.slice(5, articleList.length);
  const rightArticlesToDisplay = rightArticles.map((article) => (
    <ArticleListItem article={article} key={article.id} />
  ));

  return (
    <div className="newsletterContainer">
      {/* <h2>Newsletter</h2> */}
      <div className="newsletter">
        <div className="newsletterHeader item1">
          <div className="newsletterHoroscope"></div>
          <h3>Weekly</h3>
          <div className="newsletterWeather"></div>
        </div>

        <div className="newsletterLeft item2">{priorityToDisplay}</div>
        <div className="newsletterCenter item3">{middleArticlesToDisplay}</div>
        <div className="newsletterRight item4">{rightArticlesToDisplay}</div>
      </div>
    </div>
  );
}

export default Newsletter;
