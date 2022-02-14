const axios = require("axios");
const metadata = require("./metadata.json");

module.exports = async () => {
  const result = await axios.get(`https://collectednotes.com/${metadata.username}.json`);
  return result.data;
};
