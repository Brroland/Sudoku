const diff = require('./menu');
const readl = require('readline-sync');

console.clear();
let difficulty = 1;
console.log('Válasszon Opció: ');
console.log('Ha elakarja indítani a játékot "1": ');
console.log('Ha nehézséget akar állítani (alapértelmezett a könnyű) "2": ');
console.log('Credits "3": ');
console.log('Kilépés "4": ');
const response = readl.questionInt();
switch (response) {
  case 1:
    console.log('szia');
    break;
  case 2:
    difficulty = diff.challange();
    break;
  case 3:
    console.log('credits');
    break;
  case 4:
    process.exit;
    break;
}
console.log(difficulty);

