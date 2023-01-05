
import { createStore } from "vuex";
import axiosClient from "../axios";
const store = createStore({
  state: {
    user: {
      data: {
       
      },
      token: localStorage.getItem('TOKEN'),
    },
    products:[],
  },
  getters: {},
  actions: {
    save({commit},product){
      return axiosClient.post('/saveproduct',product)
      .then(({data})=>{
        commit('setProduct',data)
        return data;
      }) 
    },

    register({commit},user){
      return axiosClient.post('/register',user)
      .then(({data})=>{
        commit('setUser',data)
        return data;
      }) 
    },
    login({commit},user){
      return axiosClient.post('/login',user)
      .then(({data})=>{
        commit('setUser',data)
        return data;
      })
  },
  logout({commit}){
    return axiosClient.post('/logout').then(response=>{
  
  commit('logout');
  return response;

    })
  }
  },
  mutations: {
    logout:(state)=>{
        state.user.data={};
        state.user.token=null;
       

    },
    setUser:(state,userData)=>{
        state.user.token=userData.token;
        state.user.data=userData.user,
        localStorage.setItem('TOKEN',userData.token);
    },
    setProduct:(state,productData)=>{
      state.products=productData.product;
  }
  },
  modules: {},
});

export default store;
