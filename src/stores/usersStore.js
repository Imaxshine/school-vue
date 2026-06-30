import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { api } from '@/services/api'
import { useTokenStore } from '@/stores/token'

export const useUsersStore = defineStore('data', () => {
  //State
  const users = ref([])
  const loading = ref(false)
  const errorMsg = ref('')
  const isNotification = ref(false)
  //Getter
  const usersLength = computed(() => {
    return users.value.length
  })
  const getTotalMales = computed(() => {
    const total = users.value.filter((me) => me.gender === 'ME')
    if (total) {
      return total.length
    }
  })
  const getTotalFemales = computed(() => {
    const total = users.value.filter((fe) => fe.gender === 'KE')
    if (total) {
      return total.length
    }
  })
  //Actions
  async function getUsers() {
    // Zuiya fetching ya mara kwa mara
    if (users.value.length > 0){
      return;
    }
    try {
      const token = useTokenStore()
      const router = useRouter()
      isNotification.value = false
      loading.value = true
      const response = await api.get('/dt', {
        headers: {
          Authorization: `Bearer ${token.getToken()}`,
        },
      })
      if (!response.data.error) {
        users.value = response.data
        // console.log(users.value);
      }
      if (response.data.error) {
        token.removeToken()
        await router.replace({ name: 'login' })
      }
    } catch (e) {
      errorMsg.value = 'Connection error, try to connect your device with internet and try again'
      isNotification.value = true
      console.error(`Error. ${e.message}`)
    } finally {
      loading.value = false
    }
  }

  function closeAlert() {
    isNotification.value = !isNotification.value
  }

  return {
    //State
    users,
    loading,
    errorMsg,
    isNotification,
    //Getter
    usersLength,
    getTotalMales,
    getTotalFemales,
    //Action
    getUsers,
    closeAlert,
  }
})

export const useDefaultHome = defineStore('defaultHome', () => {
  // State
  const users = ref([])
  const isLoading = ref(false)
  const errorMsg = ref('')
  const isAlert = ref(false)
  //Getters
  const getTotalNumber = computed(() => {
    return users.value.length
  })
  const getFemales = computed(() => {
    const females = ref([])
    females.value = users.value.filter((f) => f.gender === 'KE')
    return females.value.length
  })
  const getMales = computed(() => {
    const males = ref([])
    males.value = users.value.filter((m) => m.gender === 'ME')
    return males.value.length
  })
  // Actions
  const getAllUsers = async () => {
    if (getTotalNumber > 0) return;
    try {
      isAlert.value = false
      isLoading.value = true
      const response = await api.get('/public')
      users.value = response.data
    } catch (e) {
      console.log(e.message)
      errorMsg.value = 'Connection error, try to connect your device with internet and try again'
      isAlert.value = true
    } finally {
      isLoading.value = false
    }
  }
  function closeAlert() {
    isAlert.value = !isAlert.value
  }

  return {
    //States
    users,
    isLoading,
    errorMsg,
    isAlert,
    //Getters
    getTotalNumber,
    getFemales,
    getMales,
    //Actions
    getAllUsers,
    closeAlert,
  }
})
