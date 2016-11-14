module.exports = (Bacon, enteringShips, destroyerPosition) => {
  const detectEnemy = ship => ship === 'zrrk';
  const checkDistance = d => d < 1;
  const ships = enteringShips.map('.type');
  const destroyerEntered = destroyerPosition.map(checkDistance).toProperty();
  const shipTally = ships.filter(detectEnemy).map(1).scan(0, (a, b) => a + b);
  const threatReport = ships.filter(destroyerEntered).take(5)
    .fold(Object.create(null), (report, ship) => {
      report[ship] = (report[ship] || 0) + 1; // eslint-disable-line no-param-reassign
      return report;
    });

  return { shipTally, threatReport };
};
