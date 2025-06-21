// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const getEmbedding = require('./utils/embed');
const searchDocs = require('./utils/search');
const generateAnswer = require('./utils/generateAnswer');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/ask', async (req, res) => {
  const { question } = req.body;
  try {
    const vector = await getEmbedding(question);
    const docs = await searchDocs(vector);
    const answer = await generateAnswer(question, docs);
    res.json({ answer });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error generating answer');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));