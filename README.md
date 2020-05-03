# next-shuffle
> Shuffle an array.

## installation
```bash
npm install -S @feizheng/next-shuffle
```

## usage
```js
import '@feizheng/next-shuffle';

//DOCS here!
```

## another solution:
```js
function shuffleUseSort(aArr){
    return aArr.sort(function(a, b){
        return (0.5 - Math.random());
    });
}
```

## resources:
- http://zpz.name/562/
- http://caibaojian.com/js-random-array.html
