TODO LIST:

- _DONE_ Build a Chrome extension that console logs URL of current tab
- _DONE_ Extension can create a new Article in database, using current URL
- _DONE_ Build backend & front end with User Auth: Signup & Login
- _DONE_ Extension can get current user from local storage session
- _DONE_ New User automatically creates default Newsletter to that user_id
- _DONE_ Extension can create a new Article for currently logged in user, saving to default Newsletter
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
- _DONE_ Login should Navigate directly to user Newsletter **Or to Random full article?**
- _DONE_ add link to open articles from Newsletter
- _DONE_ Footer with my info
- _DONE_ Rewrite fetch calls as async/await
- _DONE_ Add 'link to download extension' on Home page
- _DONE_ Add footer to Email
- _DONE_ User can add article manually through web app
- User can edit Articles on Reading List - at least the read-by date/Newsletter
- User can view full individual Article through web app (Randomly generated?)
- Reformat birthday display (but can't affect form/backend)
- User can mark an Article as 'complete' - moves to another default table: 'Completed' ?
- Next feature: push to top to make sure will be included in next version, or push to bottom
- Also save alt text when grabbing image urls (edit db schema)
- Add column: read (boolean) so user can mark as read (or push to next newsletter)
- Show stats of Articles read per week/month/year
- Update app & extension READMEs with download/use instructions
- Better styling for popup status toast - add frequency? Article title?
- Add toast notification when manually adding article through website
- Set up new email account for Forget Me Not sender
- Look up how to web scrape images

**instead of grabbing all text - get individual paragraphs from Medium, other sites if possible**
**Weekly email Newsletter not sending - why?**

STRETCH GOALS:

- _DONE_ User can log in directly through extension popup
- _DONE_ User can save title, source, URL of any website
- _DONE_ User can select 'receive email newsletter' - updates backend boolean
- _DONE_ User receives currently selected email Newsletter manually (on click)
- _DONE_ Email Newsletter is formatted like the website
- _DONE_ Email: Iterate through all articles instead of hardcoding
- _DONE_ Toast when article is saved to Reading List/Newsletter
- _DONE_ Deploy to heroku
- User receives email Newsletter at set time (Cron job?)
- Add logic to automatically update sent to true after^
- User can mark/star one article as "priority", which makes it headliner in next Newsletter edition (from specific sites only)
- Reading List & Newsletter re-render automatically when backend updated (Firebase? Sockets?)
- User can choose how many articles to receive (next: how much content/reading time)
- User can see a randomly chosen Article from the database (home page?)
- Publish extension to Chrome store
- Change Profile form to click each individual input to update..

- Get horoscope from API - add to header if user enters birthday
- Get local weather from API - add to header if user enters location

- Write scrapers for other websites besides Medium:
- _DONE_ New Yorker
- New York Times
- Slashdot

- Each component in its own folder with separate stylesheets & test files
- Testing for React & Ruby
