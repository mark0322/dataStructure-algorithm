/** 快排逻辑：
 * 1）找到比较的基准点。
 * 2）建立left，right两个数组；分别用于存储与 基准点 比较的数字。
 * 3）小于基准点的数，存于 left 数组；否则存在 right 数组。
 * 4）顺序将 left ，基准点，right 拼接起来；同时递归执行前三个步骤。
*/

function quickSort(arr = []) {
  if (arr.length <= 1) { return arr }

  const
    midIndex = arr.length / 2 | 0,
    midValue = arr.splice(midIndex, 1)[0],
    left = [],
    right = [];
  
  for (const item of arr) {
    item < midValue
      ? left.push(item)
      : right.push(item);
  }

  return [...quickSort(left), midValue, ...quickSort(right)];
}