/*!
 * name: @jswork/next-shuffle
 * description: Shuffle an array.
 * homepage: https://github.com/afeiship/next-shuffle
 * version: 1.0.0
 * date: 2020-11-21 11:00:53
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

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
