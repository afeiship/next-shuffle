(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  nx.shuffle = function (inArray) {
    var length = inArray.length;
    var i = length;
    var temp, random;

    while (i--) {
      if (i !== (random = Math.floor(Math.random() * length))) {
        temp = inArray[i];
        inArray[i] = inArray[random];
        inArray[random] = temp;
      }
    }

    return inArray;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.shuffle;
  }
})();
