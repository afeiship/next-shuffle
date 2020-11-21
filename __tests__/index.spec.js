(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.shuffle', function () {
      const arr = [1, 2, 3, 4, 5];
      const res = nx.shuffle(arr);

      console.log(res);
    });
  });
})();
