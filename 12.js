module.exports = (Bacon, riverQuality, untilSwitchTurnedOff, sampleTime) => {
  const s = riverQuality
    .takeWhile(untilSwitchTurnedOff)
    .debounceImmediate(sampleTime);
  return s;
};
