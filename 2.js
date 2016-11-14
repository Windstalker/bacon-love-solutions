// expose the stream generator as a module method
module.exports = (Bacon, promise, eventTarget, callback) => {
  const { fromPromise, fromEvent, fromCallback, fromArray } = Bacon;
  return {
    promise: fromPromise(promise),
    eventTarget: fromEvent(eventTarget, 'data'),
    callback: fromCallback(callback, 'foo', 'bar'),
    array: fromArray([1,2,3,4])
  };
};
