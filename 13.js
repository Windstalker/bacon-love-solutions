module.exports = (Bacon, riverFlowInCubicFeet, litresInCubicFeet) =>
  riverFlowInCubicFeet
  .flatMap((flow) => {
    const [level, samplesCount] = flow;
    return Bacon.interval(0, level).take(samplesCount);
  })
  .map(cubFeet => Math.round(cubFeet * litresInCubicFeet))
  .filter(l => l > 200000);
