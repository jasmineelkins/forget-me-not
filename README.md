Phase 5 Capstone Project: Newsletter Generator

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
- _DONE_ Extension sets default read-by date to end of current week (Saturday)
- _DONE_ Logout should Navigate back to Homepage
- _DONE_ Profile edit PATCH not updating: fix
- _DONE_ Reading list not working.. fix
- _DONE_ Reading List renders as table
- _DONE_ Scrape data from Medium to show article title and first paragraph..
- _DONE_ User can choose frequency: weekly or monthly
- _DONE_ Login should Navigate directly to user Newsletter (once it's configured)? Or to Random full article?
- User can edit Articles on Reading List - at least the read-by date/Newsletter
- Reformat birthday display (but can't affect form/backend)
- User can mark an Article as 'complete' - moves to another default table: 'Completed' ?
- User can choose how many articles to receive (next: how much content/reading time)
- Next feature: push to top to make sure will be included in next version, or push to bottom
- Footer with my info **need to fix styling**
- also save alt text when grabbing image urls (edit db schema)
- Add 'link to download extension' on Home page
- Rewrite fetch calls as async/await
- New email for Forget Me Not sender
  **_instead of grabbing all text - get individual paragraphs from Medium, other sites if possible_**
- add link to open articles from Newsletter
- Email: Iterate through all articles instead of hardcoding

STRETCH GOALS:

- _DONE_ User can log in directly through extension popup
- _DONE_ User can save title, source, URL of any website
- New User can sign up directly through extension popup
- _DONE_ User can select 'receive email newsletter' - backend boolean updates to true
- _DONE_ User receives currently selected email Newsletter manually (on click)
- User receives email Newsletter at set time (Cron job?)
- Email Newsletter is formatted like a real newspaper
  - User can mark one article as "priority", which makes it headliner in next Newsletter edition (from specific sites only)
- Reading List re-renders automatically when backend is updated (Firebase? Sockets?)
- User can see a randomly chosen Article from the database (home page?)
- Deploy to heroku
- _DONE_ Toast when link is added to Newsletter
- Publish extension to Chrome store

- Get horoscope from API
- Get local weather from API

- Write scrapers for other websites besides Medium:
- _DONE_ New Yorker
- New York Times
- Slashdot

- Each component in its own folder with separate stylesheets & test files
- Testing!

- Change Profile form to click each individual input to update..

WEEKEND GOALS:

- _DONE_ Finish formatting newsletter
- _DONE_ Set up mailer with manual button
- Deploy!
- Web sockets to auto reload Reading List (and Newsletter?) when article added (+ Toast!)
