import { parse } from './parse';
import { generate } from './codegen';

export function compileToFunctions(template) {
  // 我们需要把html字符串变成render函数
  // 1. 把html代码转成ast语法树，ast用来描述代码本身，形成树结构不仅可以描述html，也能描述css以及js语法
  // 很多库都运用到了ast，比如 webpack babel eslint等等
  let ast = parse(template);

  // 2. 优化静态节点
  // 有兴趣可以看源码，不影响核心功能
  // if (options.optimize !== false) {
  //   optimize(ast, options);
  // }

  // 3. 通过ast重新生成代码
  // 我们最后生成的代码需要和render函数一样
  // 类似_c('div', {id: 'app'}, _c('div', undefined, _v('hello',+_s(name)), _c('span', undefined, _v('world'))))
  // _c 代表创建元素；_v 代表创建文本；_s 代表由Json.stringify() 把对象解析成文本
  let code = generate(ast);
  // 使用with语法改变作用域为this，之后调用render函数就可以使用call改变this，方便code里面的变量取值
  let renderFn = new Function(`with(this)return ${code}`);
  return renderFn;
}
