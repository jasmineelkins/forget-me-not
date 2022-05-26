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
- User can edit Articles (at leat the read-by date/Newsletter) on Reading List ?
- Login should Navigate directly to user Newsletter (once it's configured)? Or to Random full article?
- Reformat birthday display (but can't affect form/backend)
- User can mark an Article as 'complete' - moves to another default table: 'Completed' ?
- User can choose how many articles to receive (next: how much content/reading time)
- Next feature: push to top to make sure will be included in next version, or push to bottom
- Footer with my info
- also save alt text when grabbing image urls (edit db schema)

STRETCH GOALS:

- _DONE_ User can log in directly through extension popup
- _DONE_ User can save title, source, URL of any website
- Write scrapers for other websites besides Medium...
- New User can sign up directly through extension popup
- User can select 'receive email newsletter' - backend boolean updates to true
- User receives email Newsletter
- Email Newsletter is formatted like a real newspaper
  - User can mark one article as "priority", which makes it headliner in next Newsletter edition (from specific sites only)
- Reading List re-renders automatically when backend is updated (Firebase? Sockets?)
- User can see a randomly chosen Article from the database (home page?)
- Deploy to heroku
- Toast when link is added to Newsletter - can it render outside of popup?

- Get horoscope from API
- Get local weather from API

- Each component in its own folder with separate stylesheets & test files
- Testing!

WEEKEND GOALS:

- Finish formatting newsletter
- Set up email
- Deploy!
- Web sockets to auto reload Reading List (and Newsletter?) when article added (+ Toast!)
