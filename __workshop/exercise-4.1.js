const request = require("request-promise");

const options = {
    uri: `https://icanhazdadjoke.com/`,
    headers: {
        Accept: "application/json",
    },
}

// getDadJoke
const getDadJoke = async () => {
    try {
        const response = await request(options);
        const parsedResponse = JSON.parse(response);
        // console.log(parsedResponse);
        return parsedResponse.joke;
    } catch (err) {
        console.log(err);
    }
}
// 4.1
getDadJoke().then((data) => console.log(data));

module.exports = { getDadJoke };