const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');
const fs = require('fs').promises;
const auth = require('./auth');

const {
  emailAuth,
  passwordAuth,
  nameAuth,
  ageAuth,
  talkAuth,
  talkRateAuth,
  talkWatchedAtAuth,
  tokenAuth,
  token,
} = auth;

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
  .then((el) => JSON.parse(el))
  .catch((_err) => []); 

  const talker = await getTalker();
  res.status(200).json(talker);
}));

// Req 03 e 04
app.post('/login', emailAuth, passwordAuth, (_req, res) => {
  res.status(200).json({ token: token() });
});

// Req 05

app.post('/talker',
  tokenAuth,
  nameAuth,
  ageAuth,
  talkAuth,
  talkRateAuth,
  talkWatchedAtAuth,
  rescue(async (req, res) => {
    const { name, age, talk: { watchedAt, rate } } = req.body;

    const getTalker = () => fs.readFile('./talker.json', 'utf-8')
    .then((ele) => JSON.parse(ele))
    .catch((_err) => []); 

    const talker = await getTalker();
    const newOne = { id: talker.length + 1, name, age, talk: { watchedAt, rate } };
    const talkerJSON = [...talker, newOne];

    const setTalker = (data) => fs.writeFile('./talker.json', JSON.stringify(data));

    await setTalker(talkerJSON);
    res.status(201).json(newOne);
}));

// Req 06

app.put('/talker/:id',
tokenAuth,
nameAuth,
ageAuth,
talkAuth,
talkRateAuth,
talkWatchedAtAuth,
rescue(async (req, res) => {

  const { name, age, talk: { watchedAt, rate } } = req.body;
  const { id } = req.params;
  const getTalker = () => fs.readFile('./talker.json', 'utf-8')
  .then((elem) => JSON.parse(elem))
  .catch((_err) => []); 

  const talker = await getTalker(); 

  const updated = { id: Number(id), name, age, talk: { watchedAt, rate } };
  talker[Number(id)] = updated;

  const setTalker = (data) => fs.writeFile('./talker.json', JSON.stringify(data));

  await setTalker(talker);
  res.status(200).json(updated);
}));
