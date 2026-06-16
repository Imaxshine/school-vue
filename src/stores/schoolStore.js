import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
export const useSchoolStore = defineStore('school', () => {
  // State
  const schoolName = ref(localStorage.getItem('school_name') || null);
  //Getter
  const displayName = computed(() => {
    return `Welcome ${schoolName.value}`
  })
  const isSchoolNameAvailable = computed(()=> !!schoolName.value);

  //   Action
  function enrollSchoolName(newName) {
    localStorage.setItem('school_name', newName);
    schoolName.value = newName;
  }
  function unEnroll(){
    localStorage.removeItem('school_name');
    schoolName.value = null;
  }
  function updateEnrolled(newName){
    localStorage.setItem('school_name', newName)
    schoolName.value = newName;
  }
  return {
    //state
    schoolName,
    //Getter
    displayName,
    isSchoolNameAvailable,
    //Actions
    unEnroll,
    updateEnrolled,
    enrollSchoolName,
  }
})
