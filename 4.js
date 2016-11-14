module.exports = (Bacon) => {
  const source = ['Bacon', 'is', 'delicious'];
  const createdEventStream = new Bacon.Bus();
  const timer = setInterval(() => {
    const val = source.shift();
    if (!val) {
      clearInterval(timer);
      return createdEventStream.end();
    }
    return createdEventStream.push(val);
  }, 200);
  return createdEventStream;
};
