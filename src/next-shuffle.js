(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

  nx.shuffle = function (inArray) {
    var length = inArray.length,
      i = length,
      temp,
      random;

    while(i--){
      if(i !== (random = Math.floor(Math.random() * length))){
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

}());
