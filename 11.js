module.exports = (Bacon, nidelva, leirelva, buttonClicked) =>
  Bacon.combineWith((n, l) => n + l, nidelva, leirelva).sampledBy(buttonClicked).toProperty();
