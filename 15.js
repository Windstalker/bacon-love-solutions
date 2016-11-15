module.exports = (Bacon, clicks, startAsyncTask) => {
  const spinnerVisibility = clicks.awaiting(clicks.flatMap(startAsyncTask));

  return spinnerVisibility;
};
