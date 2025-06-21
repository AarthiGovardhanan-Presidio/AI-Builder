const axios = require('../node_modules/axios/index.d.cts');

async function searchDocs(queryVector) {
  const endpoint = `${process.env.AZURE_SEARCH_ENDPOINT}indexes/${process.env.AZURE_SEARCH_INDEX}/docs/search?api-version=2021-04-30-Preview`;

  const payload = {
    vector: queryVector,
    top: 3,
    fields: 'contentVector',
    vectorFields: 'contentVector',
    filter: '',
  };

  const headers = {
    'api-key': process.env.AZURE_SEARCH_KEY,
    'Content-Type': 'application/json'
  };

  const { data } = await axios.post(endpoint, payload, { headers });
  return data.value.map(doc => doc.content).join("\n");
}