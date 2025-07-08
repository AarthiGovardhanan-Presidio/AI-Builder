require('dotenv').config();

module.exports = {
  openai: {
    apiKey: process.env.OPENAI_API_KEY,
  },
  serpapi: {
    apiKey: process.env.SERPAPI_API_KEY,
  }
};
