// weakmap 实现深拷贝
function deepClone(obj, hash = new WeakMap()) {
  // 判断obj是null还是undefined
  if(obj == null) return obj; // 该处写法不严谨，但undefined == null
  // 不是对象就不用拷贝了
  if(obj instanceof Date) return new Date(obj);
  if(obj instanceof RegExp) return new RegExp(obj);
  if(type obj !== 'object') return boj;
  // 要不是数组，要么就是对象
  if(hash.has(obj)) return obj;
  let cloneObj = new obj.constructor; // 定义一个新的空对象
  for(let key in obj) {
    //实现深拷贝
    if(obj.hasOwnProperty(key)) {
      // 如果赋予的值是对象 就把这个对象放到weakmap中
      cloneObj[key] = deepClone(obj[key], hash);
    }
  }
  return cloneObj;
}