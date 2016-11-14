// expose the stream generator as a module method
module.exports = (Bacon, stream, action, actionOnValue) => {
  const unsubscribe = stream
    .doAction(action)
    .log('Value:')
    .onValue(actionOnValue);
  return stream;
};
