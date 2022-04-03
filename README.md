# Neighbour Needs - Front End App
Neighbour Needs is a full stack MERN application (MongoDB, Express, React and Node) that allows users to find people in their neighbourhood who can help with anything from maths tutoring and interior design, to plumbing and therapy. This project was created by Ana Borges, Emily Daykin and Mohamed Mohamed in the span of just over a week. This repo contains code for the front end client only; code for the back end api lives [here](https://github.com/momoh66/ga-project3-api). For a full list of this app's features, see the [Features](#features) section below.

## Installation
- Check out the live application [here](https://neighbour-needs.netlify.app/)!
  - Feel free to register and then use your own login credentials, or try a demo one using:
    - Username: `kc@user.com`
    - Password: `Password1!@`
- Or run it locally (make sure you have a local version of MongoDB running):
  - Front End: Clone this repo, &#8594; run `npm install` &#8594; run `npm run start:client`
  - [Back End](https://github.com/momoh66/ga-project3-api): Clone this repo &#8594; run `npm install` &#8594; run `npm run seed` &#8594; run `npm run start:server` 

## Application Walkthrough
(Screenshots and gifs)

## Tech Stack
### Front End
- React Framework (Single Page Application)
- API Handling: Axios
- Pure CSS with Sass
- React-Router-Dom

### Back End
- Server: Node.js & Express
- Database: MongoDB & Mongoose
- Safeguarding from injection attacks: Express Mongo Sanitize
- Password Encryption: Bcrypt
- Authentication: JSON Web Token (JWT)

### Collaboration & Development
- Git, GitHub
- Trello for project management
- Postman for API testing
- Excalidraw for wireframing
- Npm
- Deployment:
  - Front End: Netlify
  - Back End: Heroku (& Mongo Atlas)

## Features
- Display of all profiles, and routing to an individual profile page with more information and a comments area when clicked on
- Real time searching through all profiles by name, location, or service offered
- Minimalist top navbar with a more detailed slide-in-out sidebar
- Log In and Register functionality
- Once logged in:
  - A user icon appears in the navbar, as well as a personalised welcome banner, which redirects to the user's profile page
  - The user can create a post
  - The user can leave a comment on any profile
  - Only the same user who commented/posted can remove their comment and post, no one else's
- Filtering through service type or location via their respective pages

## Architecture:
- Front End: 
  - React Components to compartmentalise code
  - React Hooks for state management and handling side effects
  - Scss stylesheets per react component
  - Single Page Application (`react-router-dom`) using `Link`, `useNavigate`, `useLocation` and `useParams`
- Back End:
  - All security checks (user access credentials) done in the back end:
    - Email validation (correct format and uniqueness)
    - Password validation (encryption and strength: minimum of 8 characters, at least one lowercase & uppercase letter and number)
    - Obscuring the password response from the front end
    - Login credentials expire after 6 hours
  - Secure routing middelware to verify logged in users, same users (only that same user can delete their comment for example) and admin users
  - Error handling middleware to assist with debugging
  - 3 interlinked schema models in MongoDB for profiles, comments and posts
  - Data seeding of 25 user profiles, 15 comments and 3 posts.


## Featured Code Snippets
- schema screenshot?
- authentication error handling (with try/catch block) in BE and FE?

## Wins & Challenges

## Future Improvements