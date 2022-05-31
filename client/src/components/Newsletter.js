import React, { useState, useEffect } from "react";
import Article from "./Article";
import PriorityArticle from "./PriorityArticle";
import ArticleListItem from "./ArticleListItem";

function Newsletter({ user }) {
  const [articleList, setArticleList] = useState([]);
  const [priorityArticle, setPriorityArticle] = useState({});

  // const [newsletterArticles, setNewsletterArticles] = useState([]);
  const [selectedFrequency, setSelectedFrequency] = useState("weekly");

  const { id } = user;

  // useEffect(() => {
  //   fetch(`/users/${id}/articles`)
  //     .then((res) => res.json())
  //     .then((listOfSavedArticles) => {
  //       console.log("Saved article list: ", listOfSavedArticles);
  //       setArticleList(listOfSavedArticles);
  //     })
  //     .catch((error) => console.log(error.message));
  // }, [id]);

  useEffect(() => {
    getUserArticles(selectedFrequency);
  }, [selectedFrequency]);

  async function getUserArticles(frequency) {
    try {
      const response = await fetch(`/users/${id}/newsletters`);
      const newslettersArray = await response.json();

      // return newsletter of given frequency
      const selectedNewsletter = newslettersArray.filter(
        (nl) => nl.frequency === frequency
      )[0];
      console.log(selectedNewsletter.articles);

      // set articleList to articles of that newsletter
      setArticleList(selectedNewsletter.articles);

      // set Priority article to first in list
      setPriorityArticle(selectedNewsletter.articles[0]);
    } catch (error) {
      console.log(error.message);
    }
  }

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

  const middleArticles = articleList.slice(1, 4);
  const middleArticlesToDisplay = middleArticles.map((article) => (
    <Article article={article} key={article.id} />
  ));

  const rightArticles = articleList.slice(5, articleList.length);
  const rightArticlesToDisplay = rightArticles.map((article) => (
    <ArticleListItem article={article} key={article.id} />
  ));

  function handleFrequencySelection(e) {
    setSelectedFrequency(e.target.value);
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function handleManualSend() {
    fetch(`/send_test`)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error.message));
  }

  return (
    <div className="newsletterContainer">
      <div className="newsletterTop">
        <div className="frequencySelector">
          <select
            id="select"
            name="frequency"
            defaultValue="weekly"
            onChange={(e) => handleFrequencySelection(e)}
          >
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>

        <div>
          <button onClick={handleManualSend}>Send Newsletter</button>
        </div>
      </div>
      <div className="newsletter">
        <div className="newsletterHeader item1">
          <div className="newsletterHoroscope"></div>
          <h3>{capitalizeFirstLetter(selectedFrequency)}</h3>
          <div className="newsletterWeather"></div>
        </div>

        <div className="newsletterLeft item2">
          <PriorityArticle key={priorityArticle.id} article={priorityArticle} />
        </div>
        <div className="newsletterCenter item3">{middleArticlesToDisplay}</div>
        <div className="newsletterRight item4">{rightArticlesToDisplay}</div>
      </div>
    </div>
  );
}

export default Newsletter;
