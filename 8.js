module.exports = (Bacon, messages, keys, decoderFunction) =>
  messages.zip(keys).map((message, key) => decoderFunction([message, key]));
