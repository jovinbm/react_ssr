module.exports = {};
exports        = {};

module.exports = {
  a: 1,
  b: function () {
    return true;
  }
};

// or

exports.a = 1;
exports.b = function () {
  return true;
};

// or override the whole module.exports and export one thing

module.exports = function () {
  return true;
};