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
  callHook(vm, 'beforeMount'); //初始渲染之前
  let updateComponent = () => {
    console.log('刷新页面');
    vm._update(vm._render());
  };

  new Watcher(vm, updateComponent, null, () => {
    callHook(vm, 'beforeUpdate'); // 更新之前
  }, true);
  callHook(vm, 'mounted'); // 渲染完成之后
}

// 虚拟dom转换成真实dom的核心方法_update
export function lifecycleMiXin(Vue) {
  // 把_update挂载在Vue的原型
  Vue.prototype._update = function (vnode) {
    const vm = this;
    const prevVnode = vm._vnode; //保留上一次的vnode
    vm._vnode = vnode;
    if (!prevVnode) {
      // path 是渲染vnode到真实dom核心
      vm.$el = patch(vm.$el, vnode); // 初次渲染 vm._vnode肯定不存在，要通过虚拟节点渲染出真实的dom，赋值给$el属性
    } else {
      vm.$el = patch(prevVnode, vnode);
    }
  };
}

// 生命周期的调用
export function callHook(vm, hook) {
  // 依次执行生命周期对应的方法
  const handlers = vm.$options[hook]
  if(handlers) {
    for(let i = 0 ; i < handlers.length; i++) {
      handlers[i].call(vm) // 生命周期里的this指向当前实例
    }
  }
}
