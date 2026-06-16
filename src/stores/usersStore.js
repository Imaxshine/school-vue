import {defineStore} from 'pinia';
import {ref, computed} from 'vue';
import {api} from '@/services/api';
import {useTokenStore} from '@/stores/token'


export const useUsersStore = defineStore('data', ()=>{
  //State
  const users = ref([])
  const loading = ref(false);
  //Getter
  const usersLength = computed(()=>{
    return users.value.length;
  })
  //Actions
  async function getUsers(){
    try {
      const token = useTokenStore();
      loading.value = true;
      const response = await api.get('/dt', {
        headers: {
          "Authorization": `Bearer ${token.getToken()}`
        }
      });
      console.log(response.data);
    }catch (e){
      console.error(`Error. ${e.message}`);
    }finally {
      loading.value = false;
    }
  }

  return {
    //State
    users,
    //Getter
    usersLength,
    //Action
    getUsers
  }
})