const languageList = [];

module.exports.addLanguage = (name, comment) => {
  languageList.push({ name, comment });
};

module.exports.getAll = () => {
  return [].concat(languageList); //for immutable
};
