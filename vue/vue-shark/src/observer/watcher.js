import { pushTarget, popTarget } from './dep';

// 全局变量id 每次 new Watcher 都会自增
let id = 0;

export default class Watcher {
  constructor(vm, exprOrFn, cb, options) {
    this.vm =vm;
    this.exprOrFn = exprOrFn;
    this.cb = cb; // 回调函数，比如在watcher更新之前可以执行beforeUpdate方法，
    this.options = options; // 额外的选项，true代表渲染watcher
    this.id = id++; // watcher 的唯一标识
    this.deps = []; // 存放dep的容器
    this.depsId = new Set(); // 用来去重

    // 如果表达式是一个函数
    if(typeof exprOrFn === 'function') {
      this.getter = exprOrFn;
    }

    // 实例化就会默认调用get方法
    this.get();
  }

  get() {
    pushTarget(this); // 在调用方法之前先把当前watcher实例对象挂载到全局Dep.target上
    this.getter(); // 如果watcher是渲染watcher，那么就相当于执行 vm._update(vm._render())，这个方法在render函数执行的时候会取值，从而实现依赖收集
    popTarget(); // 在调用之后将当前watcher从全局Dep.target移除
  }

  // 把dep放到deps里面，同时保证同一个dep只被保存到watcher一次，同样的，同一个watcher也只会保存在dep一次
  addDep(dep) {
    let id = dep.id;
    if(!this.depsIdhas(id)) {
      this.depsId.add(id);
      this.deps.push(dep);
      // 直接调用dep的addsub方法，把自己--watcher实例添加到dep的subs容器里
      dep.addSub(this);
    }
  }

  // 简单执行get方法，后续遇到计算属性再修改
  update() {
    this.get()
  }
}