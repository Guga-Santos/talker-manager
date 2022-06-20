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

// Req 02
app.get('/talker/:id', rescue(async (req, res) => {
  const getTalker = () => fs.readFile('./talker.json', 'utf-8')
  .then((content) => JSON.parse(content))
  .catch((_err) => []);

  const { id } = req.params;
  const talker = await getTalker();

  const talkerID = talker.find((el) => el.id === Number(id));

  if (!talkerID) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });

  res.status(200).json(talkerID);
}));

// Req 01

app.get('/talker', rescue(async (_req, res) => {
  const getTalker = () => fs.readFile('./talker.json', 'utf-8')
  .then((content) => JSON.parse(content))
  .catch((_err) => []); 

  const talker = await getTalker();
  res.status(200).json(talker);
}));

// 