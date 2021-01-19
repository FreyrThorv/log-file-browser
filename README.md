<img src="https://i.imgur.com/ZoSvPPk.png">

# Log file browser - Interview challenge

This UI helps you browse a log file. New logs are generated every few seconds and the front end polls for new logs. Pagination is used to avoid dumping the entire log into the DOM. Producing this took about two days of work.

While the brief mentions Material UI, I decided not to use it ae I was informed in the phone interview that it was fine so long as the UI looks good.

## Getting started

Clone the project from Github

```bash
git clone git@github.com:FreyrThorv/log-file-browser.git
```

Install back-end dependencies

```bash
cd backend # Go into backend folder
npm install  # Installs dependencies
cd .. # Back to /
```

Install front-end dependencies

```bash
cd frontend # Go into frontend folder
npm install  # Installs dependencies
cd .. # Back to /
```

Now that everything's ready you should be able to start dev environment with a single command.

```bash
sh dev.sh
```

Now you can navigate to http://localhost:3000 and browse logs to your heart's content.

## Some background on initial setup

The initial commit was helped along by using the wonderful <a href="https://create-react-app.dev/">create-react-app</a> typescript template for the front-end and the <a href="https://expressjs.com/en/starter/generator.html">express generator</a> for our barebones API. Reason being, I wanted to spend as little time wrangling configs as possible. You're likely to find traces of the initial project setup here and there.

I put both front-end and back-end into the same project folder for the sake of simplicity.

## Future improvements

The application fulfills the interview brief, but if I were building something for a team to use day-to-day, I had a few ideas for future imrpovements, including:

- a severity and datetime filter
- adding visual separation between hours for easier skimming
- better pagination navigation for large files
- add end-to-end testing with Cypress
- make it mobile-friendly
