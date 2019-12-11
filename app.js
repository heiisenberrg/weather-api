const express = require('express');
const OAuth = require('oauth');
const city = require('./city');

const app = express();
const port = 3000;

app.listen(port, () => console.log(`App listening on port ${port}!`))

app.get('/getAllCities', (req, res) => {
  res.send(city);
});

const weatherAPIRequest = new OAuth.OAuth(
    null,
    null,
    'dj0yJmk9dGNCUjAwUkRqREN5JmQ9WVdrOVRXSnROVkk0Tm1VbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PWE4',
    '7f649ddbb05b8c7c537084af40d74d4e768a5062',
    '1.0',
    null,
    'HMAC-SHA1',
    null,
    {"X-Yahoo-App-Id": "Mbm5R86e"}
);

app.post('/getWeatherForCity', (req, res) => {
  weatherAPIRequest.get(
      'https://weather-ydn-yql.media.yahoo.com/forecastrss?location=sunnyvale,washington&format=json',
      null,
      null,
      function (err, data, result) {
          if (err) {
              console.log(err);
          } else {
              console.log(data)
              res.send(data)
          }
      }
  );
});
