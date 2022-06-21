import React, { useState } from "react";
import BASE_URL from "../Config";

function AddNewArticleForm({ user, articleList, setArticleList }) {
  // const [loggedInUser, setLoggedInUser] = useState(null);
  const [articleURL, setArticleURL] = useState("");
  const [progressMessage, setProgressMessage] = useState();

  // determine end of week & month for current day:
  function determineDates(frequency) {
    const today = new Date();

    if (frequency === "weekly") {
      const lastDayOfWeek = new Date(
        today.setDate(today.getDate() - today.getDay() + 6)
      );
      return lastDayOfWeek;
    } else {
      const lastDayOfMonth = new Date(
        today.getFullYear(),
        today.getMonth() + 1,
        0
      );

      return lastDayOfMonth;
    }
  }

  // GET or POST newsletter for current user
  async function getOrCreateNewsletter(frequency) {
    try {
      const response = await fetch(`${BASE_URL}/users/${user.id}/newsletters`);
      const newslettersArray = await response.json();

      const unsentNewsletters = newslettersArray.filter(
        (nl) => nl.frequency === frequency && nl.sent === false
      );

      if (unsentNewsletters.length > 0) {
        const firstUnsent = unsentNewsletters[0];
        return firstUnsent;
      } else {
        console.log(`no unsent ${frequency} nl - create new`);
        return await createNewsletter(frequency);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  // POST new newsletter for user
  async function createNewsletter(frequency) {
    try {
      const response = await fetch(`${BASE_URL}/newsletters`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          frequency: frequency,
          publish_date: determineDates(frequency),
          user_id: user.id,
          sent: false,
        }),
      });
      const newsletterObj = await response.json();
      console.log(newsletterObj);
      return newsletterObj;
    } catch (error) {
      console.log(error.message);
    }
  }

  // POST new article
  async function createArticle(frequency) {
    setProgressMessage("Saving article");

    try {
      const targetNewsletter = await getOrCreateNewsletter(frequency);

      console.log("target newsletter: ", targetNewsletter);

      const response = await fetch(`${BASE_URL}/articles`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          url: articleURL,
          user_id: user.id,
          newsletter_id: targetNewsletter.id,
          send_date: determineDates(frequency),
          priority: "normal",
        }),
      });
      const articleObj = await response.json();
      console.log(articleObj);

      setArticleList([...articleList, articleObj]);

      setProgressMessage("Article saved");

      setTimeout(() => setProgressMessage(), 1000);
    } catch (error) {
      console.log(error.message);
    }
  }

  function handleWeeklyClick() {
    console.log("Button clicked - weekly");
    createArticle("weekly");
  }

  function handleMonthlyClick() {
    console.log("Button clicked - monthly");
    createArticle("monthly");
  }

  function handleInput(e) {
    setArticleURL(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    setArticleURL("");
  }

  return (
    <div className="newArticleFormContainer">
      <form onSubmit={(e) => handleSubmit(e)} className="newArticleForm">
        <div className="formRow">
          <label>URL</label>
          <input
            type="text"
            name="url"
            value={articleURL}
            onChange={(e) => handleInput(e)}
            id="urlInput"
          ></input>
        </div>

        <div className="addButtonsContainer">
          <button className="addBtn" type="submit" onClick={handleWeeklyClick}>
            Add to Weekly Newsletter
          </button>
          <button className="addBtn" type="submit" onClick={handleMonthlyClick}>
            Add to Monthly Newsletter
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNewArticleForm;
