import { initMixin } from './init';
import { lifecycleMiXin } from './lifecycle';
import { renderMiXin } from './render';

// Vue就是一个构造函数，通过new关键字进行实例化
function Vue(options) {
  // 这里开始进行Vue初始化工作
  this._init(options);
}

// _init方法是挂载在Vue原型的方法，通过引入文件的方式进行原型挂载需要传入Vue
// 此方法有利于代码分割
initMixin(Vue);

// 混入_render
renderMiXin(Vue);

// 混入_update
lifecycleMiXin(Vue);

export default Vue;
