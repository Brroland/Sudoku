const valid = (position, inKey, mainBoard) => {
  let check = false;
  const yp = position[0];
  const xp = position[1];
  const helpArr = new Array([8]);
  for (let i = 0; i < mainBoard[position[0]].length; i++) {
    if (inKey === mainBoard[position[0]][i].num) { check = true; }
  }
  for (let i = 0; i < mainBoard.length; i++) {
    for (let j = 0; j < mainBoard[i].length; j++) {
      helpArr.push(mainBoard[i][position[1]].num);
    }
  }
  for (let i = 0; i < helpArr.length; i++) {
    if (inKey === helpArr[i]) { check = true; }
  }
  return check;
};

module.exports = {
  valid
}
;
