const nx = require('@feizheng/next-js-core2');
require('../src/next-shuffle');

describe('api.basic test', () => {
  test('nx.shuffle', function () {
    var arr = [1, 2, 3, 4, 5];
    var rs1 = nx.shuffle(arr);
    var rs2 = nx.shuffle(arr);
    var rs3 = nx.shuffle(arr);
    console.log(rs1, rs2, rs3);

    // expect(result.name, obj1.name).toBe(null);
  });
});
