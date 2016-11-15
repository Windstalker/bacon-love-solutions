module.exports = (Bacon, riverFlow, inCriticalMode, isOnBreak, isSingleGate, systemActive, riverFlowLimit) => {
  const aboveLimit = riverFlow.map(flow => flow > riverFlowLimit).toProperty();
  return inCriticalMode.or(systemActive.and(aboveLimit).and(isSingleGate).and(isOnBreak.not()));
};
