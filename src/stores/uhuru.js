import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
export const useUhuruStore = defineStore('uhuru', () => {
  // State
  const schoolName = ref('Uhuru')
  //Getter
  const displayName = computed(() => {
    return `Welcome ${schoolName.value} secondary school`
  })

  //   Action
  function updateSchoolName(newName) {
    schoolName.value = newName
  }
  return {
    schoolName, //state
    displayName, //Getter
    updateSchoolName, //Action
  }
})
