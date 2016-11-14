module.exports = (Bacon, enteringShips, destroyerPosition) => {
  const scanEnemy = ship => (ship === 'zrrk' ? 1 : 0);
  const checkThreat = (d) => {
    if (d < 1) return 'extreme';
    if (d < 3) return 'high';
    if (d < 6) return 'medium';
    return 'low';
  };
  const isRedAlert = level => level === 'extreme';
  const ships = enteringShips.map('.type').map(scanEnemy);
  const threat = destroyerPosition.map(checkThreat).toProperty();
  const postArrivalShips = ships.filter(threat.filter(isRedAlert));

  return { ships, threat, postArrivalShips };
};
