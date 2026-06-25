import {api} from '@/services/api.js'
import {useTokenStore} from '@/stores/token.js'
import {useUsersStore} from '@/stores/usersStore.js'

export const timeOut = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration)
  })
}

export async function updateUser(id){
  const users = useUsersStore();
  const tokens = useTokenStore()
  const responses = await api.get('/update', {headers:{"Authorization": `Bearer ${tokens.getToken()}`}});
  if (responses.data !== "error"){
    const user =  users.users.filter(u=>u.id === id);
    console.log(user[0].firstName)
    return
  }
  console.log('Logout user');
}