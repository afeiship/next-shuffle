# next-shuffle
> Shuffle an array (will not create new array).


## another solution:
```js
function shuffleUseSort(aArr){
    return aArr.sort(function(a, b){
        return (0.5 - Math.random());
    });
}
```

## resources:
+ http://zpz.name/562/
