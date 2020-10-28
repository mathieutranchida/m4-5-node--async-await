const request = require('request-promise');

const options = {
  uri: `https://api.tronalddump.io/random/quote`,
  headers: {
    Accept: "application/json"
  }
}

const getTronaldDumpQuote = async () => {
  try {
    const response = await request(options);
    const parsedResponse = JSON.parse(response);
    // console.log(parsedResponse);
    return parsedResponse.value;
  } catch (err) {
    console.log(err.message);
  }
};

getTronaldDumpQuote().then((data) => console.log(data));

module.exports = { getTronaldDumpQuote };