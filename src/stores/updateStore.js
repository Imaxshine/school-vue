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
  const userId = ref(null);

  //Actions
   async function updateUser(id){
    const users = useUsersStore();
    const tokens = useTokenStore()
    const responses = await api.get('/update', {headers:{"Authorization": `Bearer ${tokens.getToken()}`}});
    if (responses.data !== "error"){
      const user =  users.users.filter(u=>u.id === id);

      firstName.value = user[0].firstName;
      lastName.value = user[0].lastName;
      gender.value = user[0].gender;
      userId.value = user[0].id;

      isDialogOpen.value = true;
      return
    }
    await router.replace({name: 'login'})
  }
  function closeDialog(){
     isDialogOpen.value = !isDialogOpen.value;
  }
  function update(){
     if (firstName.value === '')return;
     if (lastName.value === '')return;
     const usersStore = useUsersStore();
     if (userId.value){
       const user = usersStore.users.find(u=>u.id === userId.value);
       user.firstName = firstName.value;
       user.lastName = lastName.value;
       user.gender = gender.value;
       closeDialog()
     }

  }
  function deleteUser(id){
    const usersStore = useUsersStore();
    const new_list = usersStore.users.filter(u=>u.id !== Number(id));
    usersStore.users = new_list
  }
  return {
     //State
    firstName,
    lastName,
    gender,
    isDialogOpen,
     //Actions
     updateUser,
     closeDialog,
     update,
    deleteUser
  }
});
