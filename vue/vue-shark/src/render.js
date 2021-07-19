// render函数转化成虚拟dom的核心方法_render

import { createElement, createTextNode } from './vdom/index';
import { nextTick } from './util/next-tick';

export function renderMiXin(Vue) {
  Vue.prototype._render = function () {
    const vm = this;
    // 获取模板编译生成的render方法
    const { render } = vm.$options;
    // 生成vnode --虚拟dom
    const vnode = render.call(vm);
    return vnode;
  };

  // 挂载在原型的nextTick方法，可供用户手动调用
  Vue.prototype.$nextTick = nextTick;

  // render函数里面有_c、_v、_s方法需要定义
  Vue.prototype._c = function (...args) {
    // 创建虚拟dom元素
    return createElement(...args);
  };

  Vue.prototype._v = function (text) {
    // 创建虚拟dom文本
    return createTextNode(text);
  };

  Vue.prototype._s = function (val) {
    // 如果模板里面的是对象，需要JSON.stringify
    return val === null
      ? ''
      : typeof val === 'object'
      ? JSON.stringify(val)
      : val;
  };
}
