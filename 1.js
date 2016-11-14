// expose the stream generator as a module method
module.exports = (Bacon) =>
  Bacon.sequentially(100, [1, 2, 3]);
