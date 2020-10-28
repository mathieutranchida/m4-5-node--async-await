'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const { getGeekJoke } = require('./__workshop/exercise-4.3');
const { getTronaldDumpQuote } = require('./__workshop/exercise-4.2');
const { getDadJoke } = require('./__workshop/exercise-4.1');

const { handleJoke } = require('./handlers');

express()
  .use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  })
  .use(morgan('dev'))
  .use(express.static('public'))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))
  .set('view engine', 'ejs')

  // endpoints
  .get("/joke/:type", async (req, res) => {
    const types = req.params.type;
    console.log(types);
    if (types === "dad") {
      const dadJoke = await getDadJoke();
      return res.status(200).json({status: 200, message: dadJoke});
    } else if (types === "trump") {
      const trumpJoke = await getTronaldDumpQuote();
      return res.status(200).json({status: 200, message: trumpJoke});
    } else if (types === "geek") {
      const geekJoke = await getGeekJoke();
      return res.status(200).json({status: 200, message: geekJoke});
    } else {
      return res.status(400).json({status: 400, message: "Joke type doesn't exist. Please choose from dad, trump or geek."})
    }
  }) 

  .listen(8000, () => console.log(`Listening on port 8000`));
