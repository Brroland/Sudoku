const first1 = [
  [' ', 1, 9, ' ', 2, ' ', ' ', 8, 7],
  [' ', 6, 3, ' ', 8, 5, ' ', ' ', ' '],
  [' ', 2, ' ', ' ', 7, ' ', 5, 1, 5],
  ['', 5, 7, ' ', 9, 6, ' ', ' ', 3],
  [3, ' ', 6, 2, 1, ' ', 7, ' ', 4],
  [' ', ' ', 4, 7, ' ', 3, ' ', ' ', ' '],
  [' ', ' ', 2, ' ', 3, ' ', ' ', 4, ' '],
  [8, ' ', ' ', ' ', 4, 9, ' ', ' ', 5],
  [' ', ' ', ' ', 8, ' ', ' ', ' ', 3, 1]
];
const second1 = [
  [2, 8, 7, 5, 4, '', '', '', 6],
  ['', 5, '', '', '', 2, 8, 4, 9],
  ['', 6, '', '', 3, '', '', 7, ''],
  ['', '', 6, '', 5, 7, 3, '', ''],
  [1, '', 8, '', '', '', 4, '', 7],
  ['', 7, 3, '', '', '', 9, 6, 1],
  [6, '', '', 4, '', '', '', '', ''],
  ['', '', 5, 7, '', 3, 9, '', ''],
  [7, '', '', 9, 2, '', '', 1, 5]
];

const third1 = [
  [7, '', 3, '', '', '', 2, '', 4],
  [2, '', 8, '', 4, 5, '', '', 6],
  [4, 9, '', '', '', '', 1, 5, 7],
  ['', '', '', 3, 7, '', '', '', 5],
  ['', 7, '', 5, '', 1, 9, '', ''],
  ['', '', 5, '', 2, 9, 7, '', ''],
  [5, '', 1, 9, '', '', 6, 7, ''],
  ['', '', 9, 2, '', '', '', '', 1],
  ['', '', '', 6, 1, 3, '', 4, 9]
];
const first2 = [
  [3, '', '', '', 5, '', 7, '', ''],
  ['', 5, '', '', 1, '', 3, '', 6],
  ['', 8, 6, '', '', '', '', '', ''],
  [9, '', 4, '', '', 5, 2, '', ''],
  [2, '', '', 3, 7, '', '', '', 5],
  ['', 3, '', 1, '', '', 4, 6, ''],
  [5, '', '', 2, '', '', '', 7, ''],
  ['', '', '', '', '', '', 9, '', 3],
  [1, '', '', 7, 4, '', '', '', 2]
];
const second2 = [
  [5, '', '', '', 4, 9, '', '', ''],
  ['', '', 9, '', '', '', 1, '', 8],
  ['', '', 7, '', '', '', '', '', 5],
  ['', '', '', 9, '', '', '', '', 2],
  [2, 1, '', 4, '', 7, '', 9, ''],
  [4, '', 6, '', '', '', 7, '', ''],
  ['', 6, 2, '', '', 3, '', 1, ''],
  ['', '', 5, 2, '', '', 3, 6, ''],
  [3, '', '', 6, 1, '', 8, '', '']
];
const third2 = [
  ['', 4, '', '', 8, '', '', 6, ''],
  ['', '', 7, 4, '', '', 8, '', ''],
  ['', '', 8, 5, '', '', '', 3, ''],
  ['', '', '', '', '', '', 6, '', ''],
  [7, '', 6, '', '', '', 4, '', 2],
  [4, '', '', '', 6, 3, 9, 1, 7],
  ['', 7, '', 3, 1, '', '', '', 5],
  [2, '', '', '', '', '', '', '', ''],
  ['', 3, 5, '', 7, '', '', 2, 9]
];
const first3 = [
  ['', '', '', 5, '', 7, '', '', ''],
  ['', '', '', '', '', 6, '', 8, ''],
  ['', '', '', '', 2, 4, '', 3, ''],
  ['', '', 9, '', '', '', 5, '', 3],
  [7, 5, '', '', '', '', 6, 9, ''],
  ['', 1, '', '', '', '', '', '', ''],
  [8, 7, '', '', '', '', '', '', 6],
  ['', '', '', 6, '', 3, '', '', 8],
  [1, '', 5, 2, 9, '', '', '', '']
];
const second3 = [
  [8, 4, '', '', 6, '', 5, '', 1],
  ['', '', '', '', '', 3, '', 4, ''],
  ['', '', 6, 9, '', '', '', '', 7],
  ['', 2, '', 7, 1, '', '', '', 6],
  ['', '', '', 6, 3, '', '', '', ''],
  [9, '', '', '', '', '', '', 5, ''],
  ['', '', '', '', 4, '', '', 6, ''],
  [2, '', '', '', '', '', 1, 8, ''],
  ['', '', 5, '', '', '', 3, '', '']
];
const third3 = [
  ['', '', '', 4, 9, '', '', '', ''],
  [3, '', 6, '', '', '', '', '', 7],
  ['', 8, '', '', 5, 3, '', 9, ''],
  [6, '', '', 5, '', 1, '', 8, ''],
  ['', 3, '', '', '', '', '', 5, ''],
  [5, 4, '', '', '', '', 3, '', ''],
  ['', 1, '', '', 6, '', '', '', 3],
  ['', '', '', 1, '', '', '', 2, 4],
  ['', '', 8, 3, '', 4, '', 6, '']
];
// const sample = [  sablon táblákhoz
//   [,,,,,,,,]
//   [,,,,,,,,]
//   [,,,,,,,,]
//   [,,,,,,,,]
//   [,,,,,,,,]
//   [,,,,,,,,]
//   [,,,,,,,,]
//   [,,,,,,,,]
//   [,,,,,,,,]
// ];
const easy = [first1, second1, third1];
const medium = [first2, second2, third2];
const hard = [first3, second3, third3];

module.exports = {
  easy,
  medium,
  hard
};
