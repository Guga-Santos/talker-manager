
const emailAuth = (req, res, next) => {
    const { email } = req.body;
    const validEmail = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    if (!email || email === '') { 
      return res.status(400).json({ message: 'O campo "email" é obrigatório' });
    }
    if (!validEmail) {
      return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
    }
    next();
    // https://www.w3resource.com/javascript/form/email-validation.php
  };
  
  const passwordAuth = (req, res, next) => {
    const { password } = req.body;
    if (!password || password === '') { 
      return res.status(400).json({ message: 'O campo "password" é obrigatório' });
    }
    if (password.length < 6) { 
      return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
    }
    next();
  };
  
  const nameAuth = (req, res, next) => {
    const { name } = req.body;
    if (!name || name === '') {
      return res.status(400).json({ message: 'O campo "name" é obrigatório' });
    }
    if (name.length < 3) {
      return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
    }
    next();
  };

  const ageAuth = (req, res, next) => {
    const { age } = req.body;
    if (!age || age === undefined) {
      return res.status(400).json({ message: 'O campo "age" é obrigatório' });
    }
    if (age < 18) {
      return res.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' });
    }
    next();
  };

  const talkAuth = (req, res, next) => {
    const { talk } = req.body;
    if (!talk || talk === undefined) {
      return (
        res.status(400).json(
          { message: 'O campo "talk" é obrigatório'},
        )
      );
    }
    next();
  };
  
  const talkRateAuth = (req, res, next) => {
    const { talk: { rate } } = req.body;
    if (!rate && rate !== 0) {
      return (
        res.status(400).json(
          { message: 'O campo "rate" é obrigatório' },
        )
      );
    }
    if (rate < 1 || rate > 5) {
      return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
    }
    next();
  };
  
  const talkWatchedAtAuth = (req, res, next) => {
    const { talk: { watchedAt } } = req.body;
    if (!watchedAt || watchedAt === undefined) {
      return (
        res.status(400).json(
          { message: 'O campo "watchedAt" é obrigatório' },
        )
      );
    }
    const regex = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/gm;
    if (!regex.test(watchedAt)) {
      return res.status(400)
                .json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
    }
    next();
  };
  
  const token = () => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 16; i += 1) {
      result += characters[Math.floor(Math.random() 
      * characters.length)];
   }
   return result;
  };

  module.exports = {
    emailAuth,
    passwordAuth,
    nameAuth,
    ageAuth,
    talkAuth,
    talkRateAuth,
    talkWatchedAtAuth,
    token,
  };
