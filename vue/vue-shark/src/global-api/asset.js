const ASSETS_TYPE = ['component', 'directive', 'filter'];
export default function initAssertReisters(Vue) {
  ASSETS_TYPE.forEach((type) => {
    Vue[type] = function (id, definition) {
      if (type === 'component') {
        // this指向Vue
        // 全局组件注册
        // 子组件也可能有extend方法，VueComponent.component方法
        definition = this.options._base.extend(definition);
      }
      this.options[type + 's'][id] = definition;
    };
  });
}
