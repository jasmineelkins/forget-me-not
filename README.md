Phase 5 Capstone Project: Newsletter Generator

Using the Chrome extension, the user can clicks 'Add to weekly/monthly newsletter' to save an article to their collection. At the end of every week and every month they will receive an email newsletter with all the articles they have saved. If a user prefers to opt out of receiving emails, they can also view their Newsletters on the web app.
Behind the scenes: when the user clicks 'Add to newsletter', the backend checks if an unsent newsletter for that frequency exists. If it does, the article will be saved to that Newsletter; if not, a new Newsletter is created for the user and the article is saved to that. Once a Newsletter is sent, the status is updated in the database and new articles will not be added to that Newsletter any more.
From the web app, the user can view all saved articles in their Reading List, which will show the date the article will be sent. The user can edit this reading list and remove articles from their Newsletters.

TODO LIST:

- _DONE_ Build a Chrome extension that console logs URL of current tab
- _DONE_ Extension can create a new Article in database, using current URL
- _DONE_ Build backend & front end with User Auth: Signup & Login
- _DONE_ Extension can get current user from local storage session
- _DONE_ New User automatically creates default Newsletter to that user_id
- _DONE_ Extension can create a new Article for currently logged in user, saving to default Newsletter ("Reading List")
- _DONE_ User can view all saved Articles as "Reading List"
- _DONE_ Extension shows username OR link to site to log-in
- _DONE_ Extension has link to open Newsletter web app in new tab
- _DONE_ Reading List shows article title, URL, Read-by date
- _DONE_ User can delete Articles from Reading List
- _DONE_ Extension sets default read-by date to end of current week
- _DONE_ Logout should Navigate back to Homepage
- _DONE_ Profile edit PATCH not updating: fix
- _DONE_ Reading list not working.. fix
- _DONE_ Reading List renders as table
- _DONE_ Scrape data from Medium to show article title and first paragraph..
- _DONE_ User can choose frequency: weekly or monthly
- _DONE_ Login should Navigate directly to user Newsletter (once it's configured)? Or to Random full article?
- _DONE_ add link to open articles from Newsletter
- _DONE_ Footer with my info
- User can edit Articles on Reading List - at least the read-by date/Newsletter
- Reformat birthday display (but can't affect form/backend)
- User can mark an Article as 'complete' - moves to another default table: 'Completed' ?
- Next feature: push to top to make sure will be included in next version, or push to bottom
- Also save alt text when grabbing image urls (edit db schema)
- Add 'link to download extension' on Home page
- Rewrite fetch calls as async/await
  **_instead of grabbing all text - get individual paragraphs from Medium, other sites if possible_**

STRETCH GOALS:

- _DONE_ User can log in directly through extension popup
- _DONE_ User can save title, source, URL of any website
- _DONE_ User can select 'receive email newsletter' - updates backend boolean
- _DONE_ User receives currently selected email Newsletter manually (on click)
- _DONE_ Email Newsletter is formatted like the website
- _DONE_ Email: Iterate through all articles instead of hardcoding
- _DONE_ Toast when article is saved to Reading List/Newsletter
- User receives email Newsletter at set time (Cron job?)
- Add logic to automatically update sent to true after^
- User can mark one article as "priority", which makes it headliner in next Newsletter edition (from specific sites only)
- Reading List & Newsletter re-render automatically when backend updated (Firebase? Sockets?)
- User can choose how many articles to receive (next: how much content/reading time)
- User can see a randomly chosen Article from the database (home page?)
- Deploy to heroku
- Publish extension to Chrome store
- Change Profile form to click each individual input to update..

- Get horoscope from API - add to header if user enters birthday
- Get local weather from API - add to header if user enters location

- Write scrapers for other websites besides Medium:
- _DONE_ New Yorker
- New York Times
- Slashdot

- Each component in its own folder with separate stylesheets & test files
- Testing!

FINAL DETAILS:

- Add footer to Email
- Better styling for popup status toast
- New email account for Forget Me Not sender
