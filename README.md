# next-shuffle
> Shuffle an array.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-shuffle
```

## usage
```js
import '@jswork/next-shuffle';

const arr = [1, 2, 3, 4, 5];
nx.shuffle(arr);    // [ 1, 4, 3, 5, 2 ]
```

## another solution
```js
function shuffleUseSort(aArr){
  return aArr.sort(function(a, b){
    return (0.5 - Math.random());
  });
}
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-shuffle/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-shuffle
[version-url]: https://npmjs.org/package/@jswork/next-shuffle

[license-image]: https://img.shields.io/npm/l/@jswork/next-shuffle
[license-url]: https://github.com/afeiship/next-shuffle/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-shuffle
[size-url]: https://github.com/afeiship/next-shuffle/blob/master/dist/next-shuffle.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-shuffle
[download-url]: https://www.npmjs.com/package/@jswork/next-shuffle
