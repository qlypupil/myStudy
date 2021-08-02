/**
 * Observer 类会通过递归的方式把一个对象的所有属性都转化成可观测对象
 */

export class Observer {
  constructor(value) {
    this.value = value
    // 给 value 新增一个 __ob__属性，值为该 value 的 Observer 实例
    // 相当于给 value 打上一个标记，表示它已经被转化成响应式了，避免重复操作
    def(value, '__ob__', this)

    if (Array.isArray(value)) {
      // 当 value 为数组时的逻辑
      // ...
    } else {
      this.walk(value)
    }
  }

  walk(obj: Object) {
    const keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++) {
      defineReactive(obj, keys[i])
    }
  }
}


/**
 * 使一个对象转化成可观测对象
 * @param { Object } obj 对象
 * @param { String } key 对象的key
 * @param { Any } value 对象的某个key的值 
 */
function defineReactive(obj, key, val) {
  // 如果只传了 obj 和 key，那么 val = obj[key]
  if(arguments.length === 2) {
    val = obj[key]
  }
  if (typeof val === 'object') {
    new Observer(val)
  }

  Object.defineProperties(obj, key, {
    enumerable: true,
    configurable: true,
    get() {
      console.log(`${key}属性被读取了`);
      return val
    },
    set(newVal) {
      if(val === newVal) {
        return
      }
      console.log(`${key}属性被修改了`);
      val = newVal
    }
  })
}