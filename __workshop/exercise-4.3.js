const request = require('request-promise');

const options = {
  url: 'https://geek-jokes.sameerkumar.website/api?format=json',
  method: 'GET',
  headers: {
    Accept: "application/json"
  }
}

const getGeekJoke = async () => {
  try {
    const response = await request(options);
    const parsedResponse = JSON.parse(response);
    return parsedResponse.joke;
  } catch (err) {
    console.log(err.message);
  }
};

getGeekJoke().then((data) => console.log(data));