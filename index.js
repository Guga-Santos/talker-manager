const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');
const fs = require('fs').promises;

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});

app.get('/talker', rescue(async (_req, res) => {
  const getTalker = () => fs.readFile('./talker.json', 'utf-8')
  .then((content) => JSON.parse(content))
  .catch((_err) => []); 

  const talker = await getTalker();
  res.status(200).json(talker);
}));