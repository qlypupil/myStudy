import { observe } from './observer/index';

// 初始化状态，注意这里的顺序，(面试常问：能否在data里面直接使用prop的值，为什么)
// 这里初始化的顺序依次是 props>methods>data>computed>watch
export function initState(vm) {
  // 获取传入的数据对象
  const opts = vm.$options;
  if (opts.props) {
    initProps(vm);
  }
  if (opts.methods) {
    initMethods(vm);
  }
  if (opts.data) {
    // 初始化data
    initData(vm);
  }
  if (opts.computed) {
    initComputed(vm);
  }
  if (opts.watch) {
    initWatch(vm);
  }
}

// 初始化data数据
function initData(vm) {
  let data = vm.$options.data;
  // 实例的data属性就是传入的data
  // vue 组件data推荐使用函数，防止数据在组件间共享
  data = vm._data = typeof data === 'function' ? data.call(vm) : data || {};

  // 把data数据代理到vm，也就是vue实例上面，我们可以使用this.a来访问到this._data.a
  for (let key in data) {
    proxy(vm, `_data`, key);
  }
  // 对数据进行观测，--响应式数据核心
  observe(data);
}

// 数据代理
function proxy(object, sourceKey, key) {
  Object.defineProperty(object, key, {
    get() {
      return object[sourceKey][key];
    },
    set(newValue) {
      object[sourceKey][key] = newValue;
    },
  });
}
