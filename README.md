# (WIP) Log file browser

This UI helps you browses log files.

## Getting started

Pull down code

```
git clone git@github.com:FreyrThorv/log-file-browser.git
```

Install back-end dependencies

```
cd backend
npm install
cd ..
```

Install front-end dependencies

```
cd backend
npm install
cd ..
```

Start dev environment

```
 cd ..
 sh dev.sh
```

Now you should be able to navigate to http://localhost:3000 in your browser and browse logs to your hearts content.

## Some background on initial setup

The initial commit was helped along by using the wonderful <a href="https://create-react-app.dev/">create-react-app</a> typescript template for the front-end and the <a href="https://expressjs.com/en/starter/generator.html">express generator</a> for our barebones API. Reason being, I wanted to spend as little time wrangling configs as possible.

I put both front-end and back-end into the same folder for the sake of simplicity.

## Tests

#TODO: Once things are further along, write bits about running the tests here
