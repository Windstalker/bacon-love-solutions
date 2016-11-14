// Export method as a module.
module.exports = (Bacon) => {
  const source = Array.from(Array(4)).map((v, i) => 10 + i);
  const initial = source.shift();
  return Bacon.sequentially(100, source).toProperty(initial);
};
