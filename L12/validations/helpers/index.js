module.exports.validateForString = (param) => {
  if (typeof param !== 'string') {
    throw new Error('should be a string');
  }
};

module.exports.validateForNumber = (param) => {
  if (typeof param !== 'number') {
    throw new Error('should be a number');
  }
};
