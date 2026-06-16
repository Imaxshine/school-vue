import {defineStore} from 'pinia';
import {ref} from 'vue';
export const useFormStore = defineStore('forms', ()=>{
  //State
  const username = ref('');
  const password = ref('');
  //Actions
  function clearLoginForm(){
    username.value = "";
    password.value = "";
  }
  return{
    //State
    username,
    password,
    //Actions
    clearLoginForm
  }
})