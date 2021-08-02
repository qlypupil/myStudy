import initExtend from './initExend';
import initAssertReisters from './assets';
const ASSETS_TYPE = ['component', 'directive', 'filter'];
export function initGlobalApi(Vue) {
  Vue.options = {}; // 全局的组件，指令，过滤器
  ASSETS_TYPE.forEach((type) => {
    Vue.options[type + 's'] = {};
  });
  Vue.options._base = Vue; // _base 指向Vue

  initExtend(Vue); // extend 方法定义
  initAssertReisters(Vue); // assets注册方法，包括组件、指令和过滤器
}
