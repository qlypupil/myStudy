import { arrayMethods } from './arrray';

class Observer {
  // 观测值
  constructor(value) {
    //因为对数组下标的拦截太浪费性能，对Observer构造函数传入的数据参数增加了数组的判断
    Object.defineProperty(value, '__ob__', {
      // 值指代的就是Observer的实例
      value: this,
      // 不可枚举
      enumerable: false,
      writable: true,
      configurable: true,
    });
    if (Array.isArray(value)) {
      // 这里对数组进行额外判断
      // 通过重写数组原型方法来对数组的七种方法进行拦截
      value.__proto__ = arrayMethods;
      // 如果数组里包含数组还需要递归判断
      this.observeArray(value);
    } else {
      this.walk(value);
    }
  }

  observeArray(items) {
    for (let i = 0; i < items.length; i++) {
      observe(items[i]);
    }
  }

  walk(data) {
    // 对象上的所有属性进行观测
    let keys = Object.keys(data);
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let value = data[key];
      defineReactive(data, key, value);
    }
  }
}

// Object.defineProperty 数据劫持的核心
function defineReactive(data, key, value) {
  observe(value); // 递归关键
  // 如果value还是一个对象，会继续走一遍defineReactive,层层遍历一直到value不是对象为止

  Object.defineProperty(data, key, {
    get() {
      console.log('获取值');
      return value;
    },
    set(newValue) {
      if (newValue === value) return;
      console.log('设置值');
      value = newValue;
    },
  });
}

export function observe(value) {
  // 如果传过来的是对象或者数组，进行属性劫持
  if (
    Object.prototype.toString.call(value) === '[object object]' ||
    Array.isArray(value)
  ) {
    return new Observer(value);
  }
}
