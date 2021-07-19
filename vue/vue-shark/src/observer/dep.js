// dep 和 watcher 是多对多的关系
// 每个属性都有自己的dep

let id = 0; // dep实例的唯一标识
export default class Dep {
  constructor() {
    this.id = id++;
    this.subs = []; // 这个是存放watcher的容器
  }
  
  depend() {
    // 如果当前存在watcher
    if(Dep.target) {
      Dep.target.addDep(this); // 把自身--dep实例存放在watcher里面
    }
  }

  notify() {
    // 依次执行subs里面的watcher更新方法
    this.subs.forEach((watcher) => watcher.update());
  }

  addSub(watcher) {
    // 把watcher加入到自身的subs容器
  }
}

// Dep.target 是一个全局的watcher指向，默认Dep.target 为 null
Dep.target = null;

// Dep也是一个构造函数，可以把它理解为观察者模式里的被观察者，在subs里面收集watcher，当数据变动的时候通知自身的subs所有的watcher更新

// 栈结构用来存储watcher
const targetStack = [];

export function pushTarget(watcher) {
  targetStack.push(watcher);
  Dep.target = watcher; // Dep.target 指向当前watcher
}

export function popTarget() {
  targetStack.pop(); // 当前watcher出栈，拿到上一个watcher
  Dep.target = targetStack[targetStack.length - 1]
}

