var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-shuffle');

describe('next/shuffle', function () {

  it('nx.shuffle', function () {
    var arr1 = [1,2,3,4,5,6,7,8,9,10];

    console.log(
      nx.shuffle(arr1)
    );
  });

});
