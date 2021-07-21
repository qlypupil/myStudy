import { initState } from './state';
import { compileToFunctions } from './compiler/index';
import { callHook, mountComponent } from './lifecycle';
import { mergeOptions } from './util';

export function initMixin(Vue) {
  Vue.prototype._init = function (options) {
    const vm = this;
    // 这里的this代表调用_init方法的对象（实例对象）
    // this.$optios就是用户new Vue的时候传入的属性
    vm.$options = options;
    // 初始化状态
    initState(vm);

    // 如果有el属性，进行模板渲染
    if (vm.$options.el) {
      vm.$mount(vm.$optios.el);
    }
  };
}

// 这块代码在源代码里面的位置其实是放在entry-runtime-with-compiler.js里面
// 代表的是Vue源码里面包含了compile编译功能，这个和runtime-only版本需要区分开
Vue.prototype.$mount = function (el) {
  const vm = this;
  const options = vm.$options;
  el = document.querySelector(el);

  // 如果不存在render属性
  if (!options.render) {
    // 如果存在template属性
    let template = options.template;

    if (!template && el) {
      // 如果不存在render和template，但是存在el属性，直接将el属性直接赋值到el所在的外层html结构（就是el本身并不是父元素）
      template = el.outerHtml;
    }

    // 最终需要把template模板转化成render函数
    if (template) {
      const render = compileToFunctions(template);
      options.render = render;
    }
  }

  // 将当前组件的实例挂载到真实的el节点上面
  return mountComponent(vm, el);
};

Vue.prototype._init = function(options) {
  const vm = this;
  // 这里的this代表调用_init方法的对象（实例对象）
  // this.$options 就是用户 new Vue的时候传入的属性和全局的Vue.options合并之后的结果

  vm.$options = mergeOptions(vm.constructor.options, options)
  callHook(vm, 'beforeCreate'); // 初始化数据之前
  // 初始化状态
  initState(vm);
  callHook(vm , 'created'); // 初始化数据之后
  // 如果有el属性，进行模板渲染
  if(vm.$options.el) {
    vm.$mount(vm.$options.el);
  }
}
