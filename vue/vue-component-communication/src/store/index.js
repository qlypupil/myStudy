import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
/**
 * state：用于数据的存储，是 store 中唯一的数据源。
 * getters: 如 vue 中的计算属性一样，基于 state 数据的二次包装，常用于数据的筛选和多个数据的相关性操作。
 * mutations：类似函数，改变 state 数据的唯一途径，且不能用于处理异步事件。
 * actions：类似于 mutations ，用于提交 mutation 来改变状态，而不直接变更状态，可以包含任意异步操作。
 * modules：类似于命名空间，用于项目中将各个模块的状态分开定义和操作，便于维护。
 */

const state = {
  // 初始化A和B组件的数据，等待获取
  AMsg: '',
  BMsg: '',
};

const mutations = {
  receiveAMsg(state, payload) {
    // 将A组件的数据存放于state
    state.AMsg = payload.AMsg;
  },
  receiveBMsg(state, payload) {
    // 将B组件的数据存放于state
    state.BMsg = payload.BMsg;
  },
};

export default new Vuex.Store({
  state,
  mutations,
});

// export default new Vuex.Store({
//   state: {},
//   mutations: {},
//   actions: {},
//   modules: {},
// });
