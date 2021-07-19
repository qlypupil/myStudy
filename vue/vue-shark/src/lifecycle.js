import Watcher from './observer/watcher';
import { patch } from './vdom/patch';

// 组件挂载核心方法 mountComponent
export function mountComponent(vm, el) {
  // 上一步模板编译解析成了render函数
  // 下一步就是执行vm._render()方法，调用生成的render函数，生成虚拟dom
  // 最后使用vm._update()方法把虚拟dom渲染到页面

  // 真实的el选项赋值给实例的$el属性，为之后的虚拟dom产生的新的dom替换老的dom做铺垫
  vm.$el = el;

  // _update和_render方法都是挂载在vue原型的方法，类似_init
  // 引入watcher的概念，这里注册一个渲染watcher，执行vm._update(vm._render())方法渲染视图
  let updateComponent = () => {
    console.log('刷新页面');
    vm._update(vm._render());
  };

  new Watcher(vm, updateComponent, null, true);
}

// 虚拟dom转换成真实dom的核心方法_update
export function lifecycleMiXin(Vue) {
  // 把_update挂载在Vue的原型
  Vue.prototype._update = function (vnode) {
    const vm = this;
    // path 是渲染vnode到真实dom核心
    patch(vm.$el, vnode);
  };
}