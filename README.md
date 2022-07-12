# Forget Me Not

> Forget Me Not is a React/Rails web application that allows you to save articles to a custom reading list and receive them in an email newsletter. You choose when you want to read them: that week or by the end of the month.
> Live demo [_here_](https://vimeo.com/723854744/ea6d716679).

## Table of Contents

- [General Info](#general-information)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Screenshots](#screenshots)
- [Setup](#setup)
- [Usage](#usage)
- [Project Status](#project-status)
- [Room for Improvement](#room-for-improvement)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)
<!-- * [License](#license) -->

## General Information

- For my capstone project at the Flatiron School I wanted to build an app that was unique and functional, so I started thinking about the ways that I use technology and what could be improved. Something that immediately came to mind is the built-in reading list of our web browsers.
- These built-in reading lists are not visually appealing. Everything is added to one list, with no option to set when you want to read an article. Forget Me Not allows you to choose when you would like to read the article and then receive your reading list as a newsletter sent at the end of each week and month. This way, you won't forget about the articles you've saved.
- I built this project to solve an issue I've faced, and to challenge myself to design and build a fully functional app within 3 weeks. I used my foundation in React and Rails, and also learned how to build a Chrome extension, program custom web scrapers, and send formatted emails.
<!-- You don't have to answer all the questions - just the ones relevant to your project. -->

## Technologies Used

- React 18.1.0
- Ruby 2.7.4p191
- Rails 7.0.3

##### Ruby Gems:

- bcrypt 3.1.7
- watir 7.1.0
- nokogiri 1.13.6
- pg 1.3.5

## Features

- Save articles to your custom reading list
- Receive as a formatted email newsletter
- Can be used with Chrome extension ** _in development mode only, see instructions below_

## Screenshots

#### Homepage + Extension
![Homepage + Extension](https://res.cloudinary.com/dbl7owtdh/image/upload/v1657639054/Forget%20Me%20Not/Forget_me_not_w_extension_v6ly8q.png)

#### Newsletter (viewed on website)
![Newsletter](https://res.cloudinary.com/dbl7owtdh/image/upload/v1657639066/Forget%20Me%20Not/forget-me-not_vo92xm.png)

#### Newsletter (viewed as email)
![Newsletter](https://res.cloudinary.com/dbl7owtdh/image/upload/v1657651160/Forget%20Me%20Not/email_newsletter_vktxrb.png)

#### Wireframe
![Wireframe](https://res.cloudinary.com/dbl7owtdh/image/upload/v1657639054/Forget%20Me%20Not/Forget_Me_Not_wireframe_y7gwuh.png)


## Demo

<a href="https://vimeo.com/723854744/ea6d716679
" target="_blank"><img src="https://res.cloudinary.com/dbl7owtdh/image/upload/v1657639053/Forget%20Me%20Not/intro_image_jrc0hn.png" 
alt="Forget Me Not intro screen" width="240" height="180" border="10" /></a>

## Setup

To get started:

1. Clone this repository
2. Install dependencies
3. Start rails server and start react app

```
cd forget-me-not
bundle install
rails s

cd client
npm install
npm start
```

## Usage

Forget Me Not is designed to be used with a Chrome extension which can access the URL of the current tab. <a href="https://github.com/jasmineelkins/forget-me-not-extension" target="_blank">Click this link to access the extension repository</a> and follow the installation instructions in the README. You will need to use Chrome Dev and add the extension in Developer mode.

Alternatively, there is a form embedded at the top of the Reading List page where you can enter the URL of the page you want to save. This will achieve the same results without having to install the Chrome extension!


## Project Status

Project is: _in progress_.

## Room for Improvement

Room for improvement:

- Forget Me Not is deployed on Heroku, but the extension can not yet interact with that version. There is also a bug while saving articles using the embedded form on Heroku- this is top priority to fix.
- Adding sort & filter options to the reading list to allow for more customization.

To do:

- Set up automatic email delivery according to frequency.
- Include horoscope and local weather based on user information.
- Add web scrapers for additional sources.
- Publish the extension in the Chrome store.

## Acknowledgements

- This project was inspired by an idea from <a href="https://www.ideasgrab.com/ideas-1000-2000/" target="_blank">ideasgrab.com</a>:
  > "an app that takes the articles you saved to your reading list and sends them to you as a printed newspaper"
- Many thanks to my instructor at Flatiron, Chett Tiller: for teaching me a solid foundation in React and Rails, and supporting and encouraging me not only on for this project, but throughout the entire 15-week program.

## Contact

Created by [Jasmine Elkins](https://www.linkedin.com/in/jasmine-elkins/) - feel free to contact me!

--

Use the app here: https://jasmineelkins-forget-me-not.herokuapp.com/
