const diff = require('./menu');
const map = require('./boards');
const move = require('./movee');
const validation = require('./validation');
const table = require('table');
const readl = require('readline-sync');
const chalk = require('chalk');

const game = () => {
  const position = [0, 0];
  const difficulty = 0;
  diff.challange(difficulty);
  const mainBoard = map.initializer(difficulty);
  const gameBoard = new Array(mainBoard.length);
  for (let i = 0; i < mainBoard.length; i++) {
    gameBoard[i] = new Array(mainBoard[i].length);
  }
  for (let i = 0; i < mainBoard.length; i++) {
    for (let j = 0; j < mainBoard[i].length; j++) {
      if (mainBoard[i][j].master === true) {
        gameBoard[i][j] = chalk.blue(mainBoard[i][j].num);
      } else {
        gameBoard[i][j] = mainBoard[i][j].num;
      }
    }
  }

  const boardDraw = (gameBoard, position, mainBoard) => {
    for (let i = 0; i < mainBoard.length; i++) {
      for (let j = 0; j < mainBoard[i].length; j++) {
        if (mainBoard[i][j].master === true) {
          gameBoard[i][j] = chalk.blue(mainBoard[i][j].num);
        } else {
          gameBoard[i][j] = mainBoard[i][j].num;
        }
        if (i === position[0] && j === position[1]) { // kurzort poziciónak megfelően berakja
          gameBoard[i][j] = gameBoard[i][j] + chalk.green('??');
        }
      }
    }
    console.clear();
    const output = table.table(gameBoard); // rajzol
    console.log(output);
    for (let i = 0; i < gameBoard.length; i++) { // számot visszarakja
      for (let j = 0; j < gameBoard[i].length; j++) {
        if (i === position[0] && j === position[1]) {
          gameBoard[i][j] = mainBoard[i][j].num;
        }
        if (mainBoard[i][j].master === true) {
          gameBoard[i][j] = chalk.blue(mainBoard[i][j].num);
        }
      }
    }
  };
  const addingNum = (mainBoard, position) => {
    let check = false;
    let inKey = readl.keyIn(chalk.cyan('milyen számot adhatok meg?'), { limit: '$<1-9>' });
    inKey = parseInt(inKey);
    check = validation.valid(position, inKey, mainBoard);
    if (check === true) {
      console.log(chalk.red('Helytelen számot adot meg, ilyen szám már van '));
      return addingNum(mainBoard, position);
    } else {
      mainBoard[position[0]][position[1]].num = inKey;
    }
  };

  const movement = (position, gameBoard, mainBoard) => {
    console.log(chalk.bgGreen('Az irányításhoz 1-9-ig gombokkal lehet:'));
    console.log(chalk.magenta('előre lépéshez:'), ' 1;', chalk.magenta(' átlóban (balra fel):'), ' 7 ');
    console.log(chalk.magenta('balra lépéshez:'), ' 4;', chalk.magenta('átlóban (balra le):'), ' 1 ');
    console.log(chalk.magenta('jobbra lépéshez:'), ' 6;', chalk.magenta('átlóban (jobbra fel):'), ' 9 ');
    console.log(chalk.magenta('lefele lépéshez:'), ' 8;', chalk.magenta('átlóban (jobbra le):'), ' 3 ');
    console.log('menübe való visszalépéshez nyomja meg az 5');
    let keyboard = readl.keyIn('Nyomjon meg egy irányt: ', { limit: ['$<1-9>', '+'] });
    if (keyboard !== '+') {
      keyboard = parseInt(keyboard);
      if (keyboard === 5) { return game(); }
      move.where(keyboard, position);
    } else {
      if (keyboard === '+') {
        if (mainBoard[position[0]][position[1]].master === true) {
          console.log(console.log(chalk.cyan('Ezt a számot nem lehet módosítani')));
          return movement(position, gameBoard, mainBoard);
        }
        addingNum(mainBoard, position);
      } else {
        move.where(keyboard, position);
      }
    }
  };
  while (true) {
    console.clear();
    boardDraw(gameBoard, position, mainBoard);

    movement(position, gameBoard, mainBoard);
    for (let i = 0; i < mainBoard.length; i++) {
      for (let j = 0; j < mainBoard.length; j++) {
        if (mainBoard[i][j] > 0) {
          console.log('Gratulálok nyertél');
        }
      }
    }
  }
};
game();
