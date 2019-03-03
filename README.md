# REACT FUNCTION TO CONVERT NUMBER TO ENGLISH NAME

### [Demo](https://www.mattiabuffetti.org/tests/JobToMe/esempio_1/)

## Getting started

You can view a live demo over at: [Demo](https://www.mattiabuffetti.org/tests/JobToMe/esempio_1/)

To get the frontend running locally:

- Clone this repo
- `npm install` to install all req'd dependencies
- `npm start` to start the local server

Local web server will use port 3000. You can configure port in scripts section of `src/server/index.js`: I use [node](https://nodejs.org/it/) to set environment variable PORT for React scripts, this is Windows-compatible way of setting environment variables.

## Project explain

For this project I set the webpack to bundle the project and it builds all on `dist` folder (`webpack.config.js`). I add the `react-router-dom`, even if not necessary for this project, beacuse I would set it so if necessary it is possible to add a new `Route` and then create the component.

I create an external function (`/src/client/utils/function.js`) to get the input value and then convert to corresponding English Name. For the name and I create an external file (`/src/client/config/constants.js`) to store all name, so it is more usefull if necessary to change something or only if you want to translate it on different language.

## Project files list

###ASSETS FOLDER (`/src/assets`)

- fonts: fonts use on application, the definitve versione will build on `/dist` folder by Webapack
- images: images use on application, the definitve versione will build on `/dist` folder by Webapack
- styles: here is stored the scss files used to define the design of application

