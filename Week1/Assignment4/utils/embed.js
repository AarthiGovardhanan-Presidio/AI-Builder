const axios = require('../node_modules/axios/index.d.cts');

async function getEmbedding(text) {
  const endpoint = `${process.env.AZURE_OPENAI_ENDPOINT}openai/deployments/embedding-ada-v2/embeddings?api-version=2023-05-15`;

  const response = await axios.post(
    endpoint,
    { input: text },
    { headers: {
        'api-key': process.env.AZURE_OPENAI_API_KEY,
        'Content-Type': 'application/json'
    }}
  );

  return response.data.data[0].embedding;
}