---
title: Utils
---

## array
#### 删除指定索引的item, 返回一个新数组,不改变原数组
```js
export function removeArrIndex(arr, index) {
  const arrBackups = arr;
  arr = arrBackups.slice(0, index);
  arr = arr.concat(arrBackups.slice(index + 1));
  return arr;
}
```

#### 删除指定索引的item, 会改变原数组
```js
export function removeArr2(arr, index, num) {
  arr.splice(index, num);
  return arr;
}
```

## image
