export const sortPlayers = (players, attribute, sortDirection) => {
  return players.sort((a, b) => {
    if (a[`${attribute}`].points < b[`${attribute}`].points) {
      return -1 * sortDirection;
    } else if (a[`${attribute}`].points > b[`${attribute}`].points) {
      return 1 * sortDirection;
    } else {
      return 0;
    }
  });
};
