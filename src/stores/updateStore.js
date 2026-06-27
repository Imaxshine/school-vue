import { defineStore } from 'pinia'
import {ref} from 'vue';

import { api } from '@/services/api.js'
import { useTokenStore } from '@/stores/token.js'
import { useUsersStore } from '@/stores/usersStore.js'
import {useRouter} from 'vue-router';
const router = useRouter();
export const useUpdateStore = defineStore('update', ()=>{
  //States
  const firstName = ref("");
  const lastName = ref("");
  const gender = ref("");
  const isDialogOpen = ref(false);
  //Actions
   async function updateUser(id){
    const users = useUsersStore();
    const tokens = useTokenStore()
    const responses = await api.get('/update', {headers:{"Authorization": `Bearer ${tokens.getToken()}`}});
    if (responses.data !== "error"){
      const user =  users.users.filter(u=>u.id === id);
      firstName.value = user[0].firstName
      return
    }
    await router.replace({name: 'login'})
  }
  return {
     //State
    firstName,
     //Actions
     updateUser
  }
});
