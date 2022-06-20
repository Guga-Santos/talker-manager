const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');
const utilities = require('./FsUtilities');
const auth = require('./auth');

const { getTalker, setTalker } = utilities;

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

// Req 02
app.get('/talker/:id', rescue(async (req, res) => {
  const { id } = req.params;
  const talker = await getTalker();

  const talkerID = talker.find((el) => el.id === Number(id));

  if (!talkerID) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });

  res.status(200).json(talkerID);
}));

// Req 01

app.get('/talker', rescue(async (_req, res) => {
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

    const talker = await getTalker();
    const newOne = { id: talker.length + 1, name, age, talk: { watchedAt, rate } };
    const talkerJSON = [...talker, newOne];

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

  const talker = await getTalker(); 

  const updated = { id: Number(id), name, age, talk: { watchedAt, rate } };
  talker[Number(id)] = updated;

  await setTalker(talker);
  res.status(200).json(updated);
}));

// Req 07

app.delete('/talker/:id',
tokenAuth,
rescue(async (req, res) => {
  const { id } = req.params;
  const talker = await getTalker(); 
  const newJSON = talker.filter((ele) => ele.id !== Number(id));

  await setTalker(newJSON);

  res.send(204);
}));

app.listen(PORT, () => {
  console.log('Online');
});
