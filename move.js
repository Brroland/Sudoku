const where = (destination, pos) => {
  switch (destination) {
    case 1:
      pos[0] += 1;
      pos[1] -= 1;
      if (pos[1] < 0) { pos[1] = 8; }
      if (pos[0] > 8) { pos[0] = 0; }
      break;
    case 2 || 's':
      pos[0] += 1;
      if (pos[0] > 8) { pos[0] = 0; }
      break;
    case 3:
      pos[1] += 1;
      pos[0] += 1;
      if (pos[1] > 8) { pos[1] = 0; }
      if (pos[0] > 8) { pos[0] = 0; }
      break;
    case 4 || 'a':
      pos[1] -= 1;
      if (pos[1] < 0) { pos[1] = 8; }
      break;
    case 6 || 'd':
      pos[1] += 1;
      if (pos[1] > 8) { pos[1] = 0; }
      break;
    case 7:
      pos[0] -= 1;
      pos[1] -= 1;
      if (pos[1] < 0) { pos[1] = 8; }
      if (pos[0] < 0) { pos[0] = 8; }
      break;
    case 8 || 'w':
      pos[0] -= 1;
      if (pos[0] < 0) { pos[0] = 8; }
      break;
    case 9:
      pos[0] -= 1;
      pos[1] += 1;
      if (pos[1] > 8) { pos[1] = 0; }
      if (pos[0] < 0) { pos[0] = 8; }
      break;
  }
  return pos;
};
module.exports = {
  where
};
