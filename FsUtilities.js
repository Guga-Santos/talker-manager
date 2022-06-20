const fs = require('fs').promises;

const getTalker = () => fs.readFile('./talker.json', 'utf-8')
  .then((content) => JSON.parse(content))
  .catch((_err) => []);

  const setTalker = (data) => fs.writeFile('./talker.json', JSON.stringify(data));

module.exports = {
    getTalker,
    setTalker,
};