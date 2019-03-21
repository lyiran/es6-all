// ##  vue 数据双向绑定使用API Object.defineProperty()
let data = {
  name: 'xiaoyinyin',
  age: 28,
  address: {
    location: '回龙观'
  }
}
function update() {
  console.log('视图更新');
}
function observe(obj) {
  // Object.defineProperty只能用在对象上
  if(typeof obj !== 'object') return obj;
  for(let key in obj) {
    defineReactive(obj, key, obj[key]);
  }
}
function defineReactive(obj, key, value) {
  observe(value);
  Object.defineProperty(obj, key, {
    get() {
      return value;
    },
    set(val) {
      update();
      value = val;
    }
  })
}
observe(data);