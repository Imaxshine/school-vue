import {defineStore} from 'pinia';
import {ref, computed} from 'vue';
export const useData = defineStore('data', ()=>{
  //State
  const data = ref([])
  //Getter
  const foundData = computed(() => {
    return data.value
  });
  //Actions

})