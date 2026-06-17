import {defineStore} from 'pinia';
import {ref, computed} from 'vue';
import {useRouter} from 'vue-router';
import {api} from '@/services/api';
import {useTokenStore} from '@/stores/token'


export const useUsersStore = defineStore('data', ()=>{
  //State
  const users = ref([])
  const loading = ref(false);
  const errorMsg = ref("");
  const isNotification = ref(false);
  //Getter
  const usersLength = computed(()=>{
    return users.value.length;
  })
  //Actions
  async function getUsers(){
    try {
      const token = useTokenStore();
      const router = useRouter();
      isNotification.value = false
      loading.value = true;
      const response = await api.get('/dt', {
        headers: {
          "Authorization": `Bearer ${token.getToken()}`
        }
      });
      if (!response.data.error){
        users.value = response.data;
        console.log(users.value);
      }
      if (response.data.error){
        token.removeToken();
        await router.replace({name: "login"})
      }
    }catch (e){
      errorMsg.value = "Connection error, try to connect your device with internet and try again";
      isNotification.value = true;
      console.error(`Error. ${e.message}`);
    }finally {
      loading.value = false;
    }
  }
  function closeAlert(){
    isNotification.value = !isNotification.value;
  }

  return {
    //State
    users,
    loading,
    errorMsg,
    isNotification,
    //Getter
    usersLength,
    //Action
    getUsers,
    closeAlert
  }
})