const readl = require('readline-sync');
const challange = () => {
  console.clear();
  console.log('Válasszon nehézséget: ');
  console.log('Könnyű nehézségű pályához nyomjon "1": ');
  console.log('Közepes nehézségű pályához nyomjon "2": ');
  console.log('Erős nehézségű pályához nyomjon "3": ');
  const difficulty = readl.questionInt();
  return difficulty;
};
module.exports = {
  challange
};

