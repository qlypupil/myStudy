// 先保留数组原型
const arrayProto = Array.prototype;
// 然后将 arrayMethods 继承自数组原型
// 这里是面向切片编程思想AOP; --不破坏封装的前提下，动态的扩展功能
export const arrayMethods = Object.create(arrayProto);
let methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'reverse',
  'sort',
];
methodsToPatch.forEach((method) => {
  arrayMethods[method] = function (...args) {
    // 这里保留原型方法的执行结果
    const result = arrayProto[method].apply(this, args);
    // 关键
    // this 代表的就是数据本身，比如数据是{a:[1,2,3]}，那么我们使用a.push(4)，this就是a，ob就是a.__ob__，这个属性就是上段代码增加的，代表的是该数据已经被响应式观察过了指向Observer实例
    const ob = this.__ob__;

    // 这里的标志就是代表数组有新增操作
    let inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break;
      case 'splice':
        inserted = args.splice(2);
      default:
        break;
    }
    // 如果有新增的元素，inserted就是一个数组，调用Obserber实例的observerArray对数组每一项进行观测
    if (inserted) ob.observeArray(inserted);
    // 之后，还可以在这里检测到了数组改变了之后从而触发视图更新的操作
    return result;
  };
});
