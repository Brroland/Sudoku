const where = (destination, pos) => {
  switch (destination) {
    case 1 :
      if (pos[0] === 0) {
        pos[0] = 8;
      } else {
        if (pos[0] === 8) {
          pos[0] = 0;
        } else { pos[0] += 1; }
      }

      if (pos[1] === 8) {
        pos[1] = 0;
      } else {
        if (pos[1] === 0) {
          pos[1] = 8;
        } else { pos[1] -= 1; }
      }
      console.log('dél nyugatra mentél');
      break;
    case 2 || 's':
      if (pos[0] === 0) {
        pos[0] = 8;
      } else {
        if (pos[0] === 8) {
          pos[0] = 0;
        } else { pos[0] += 1; }
      }
      console.log('délre mentél');
      break;
    case 3:
      if (pos[1] === 8) {
        pos[1] = 0;
      } else {
        if (pos[1] === 0) {
          pos[1] = 8;
        } else { pos[1] += 1; }
      }
      if (pos[0] === 0) {
        pos[0] = 8;
      } else {
        if (pos[0] === 8) {
          pos[0] = 0;
        } else { pos[0] += 1; }
      }
      console.log('dél keletre mentél');
      break;
    case 4 || 'a':
      if (pos[0] === 0) {
        pos[0] = 8;
      } else {
        if (pos[0] === 8) {
          pos[0] = 0;
        } else { pos[0] -= 1; }
      }
      console.log('nyugatra mentél');
      break;
    case 6 || 'd':
      if (pos[1] === 8) {
        pos[1] = 0;
      } else {
        if (pos[1] === 0) {
          pos[1] = 8;
        } else { pos[1] += 1; }
      }
      console.log('keletre mentél');
      break;
    case 7:
      if (pos[0] === 0) {
        pos[0] = 8;
      } else {
        if (pos[0] === 8) {
          pos[0] = 0;
        } else { pos[0] -= 1; }
      }
      if (pos[1] === 8) {
        pos[1] = 0;
      } else {
        if (pos[1] === 0) {
          pos[1] = 8;
        } else { pos[1] -= 1; }
      }
      console.log('észak nyugatra mentél');
      break;
    case 8 || 'w':
      if (pos[0] === 0) {
        pos[0] = 8;
      } else {
        if (pos[0] === 8) {
          pos[0] = 0;
        } else { pos[0] -= 1; }
      }
      console.log('északra mentél');
      break;
    case 9:
      if (pos[0] === 0) {
        pos[0] = 8;
      } else {
        if (pos[0] === 8) {
          pos[0] = 0;
        } else { pos[0] -= 1; }
      }
      if (pos[1] === 8) {
        pos[1] = 0;
      } else {
        if (pos[1] === 0) {
          pos[1] = 8;
        } else { pos[1] += 1; }
      }
      console.log('észak keletre mentél');
      break;
    case 'q':
      process.exit();
  }
  return pos;
};
module.exports = {
  where
};
