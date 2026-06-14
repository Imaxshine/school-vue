import {defineStore} from "pinia";
import {ref, computed} from "vue";

export const useTokenStore = defineStore('token', ()=>{
  //====STATE====
  const token = ref(localStorage.getItem('token') || null);
  const isLoading = ref(false);
  //====GETTERS====
  const isLogin = computed(()=>{
    return !!token.value;
  })
  //====ACTIONS====
  function setToken(JwtToken){
    localStorage.setItem('token', JwtToken);
    token.value = JwtToken;
  }
  function removeToken(){
    localStorage.removeItem('token');
    token.value = null;
  }
  function getToken(){
    return token.value;
  }

  return {
    //State
    token,
    //Getters
    isLogin,
    //Actions
    setToken,
    getToken,
    removeToken
  }
})