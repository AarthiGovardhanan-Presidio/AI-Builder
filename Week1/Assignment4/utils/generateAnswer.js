const axios = require('../node_modules/axios/index.d.cts');

async function generateAnswer(userQuery, contextDocs) {
  const endpoint = `${process.env.AZURE_OPENAI_ENDPOINT}openai/deployments/${process.env.AZURE_OPENAI_DEPLOYMENT_ID}/chat/completions?api-version=2024-03-01-preview`;

  const messages = [
    { role: "system", content: "You are a helpful AI assistant that answers questions based on provided context." },
    { role: "user", content: `Context: ${contextDocs}\n\nQuestion: ${userQuery}` }
  ];

  const { data } = await axios.post(endpoint, {
    messages,
    temperature: 0.2,
    max_tokens: 500
  }, {
    headers: {
      'api-key': process.env.AZURE_OPENAI_API_KEY,
      'Content-Type': 'application/json'
    }
  });

  return data.choices[0].message.content;
}