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
- Reading List shows article title, URL, & Read-by date
- User can edit Articles on Reading List
- User can delete Articles from Reading List
- Extension has option to set 'read-by' date for Article
- Logout should Navigate back to Homepage
- Login should Navigate directly to user Newsletter
- _DONE_ Profile edit PATCH not updating: fix
- _DONE_ Reading list not working.. fix
- Reformat birthday display (but can't affect form/backend)
- User can select 'receive email newsletter' - backend boolean updates to true
- Reading List renders as table

- Deploy to heroku

BONUS GOALS:

- Get horoscope from API
- Get local weather from API

STRETCH GOALS:

- User can log in directly through extension popup
- User receiveds email Newsletter
- Email Newsletter is formatted like a real newspaper
  - User can mark one articles as "priority", which makes it headliner in next Newsletter edition (from specific sites only)
- Reading List re-renders automatically when backend is updated (Firebase? Sockets?)
