<script setup>
import {ref, onMounted} from 'vue';
const userInput = ref("");
import Loader from '@/view/Loader.vue';
import Alerts from '@/view/Alerts.vue'
import {useSchoolStore} from '@/stores/schoolStore';
import {useUsersStore} from '@/stores/usersStore'
const school = useSchoolStore();
const users = useUsersStore();
onMounted(()=>{
  users.getUsers();
})
// console.log(`Females: ${users.getTotalFemales}`)
function saveSchoolName(){
  if (userInput.value === ""){
    return
  }
  if (school.isSchoolNameAvailable){
    alert('You have already enroll an exist one');
    return;
  }
  if (userInput.value.length < 5){
    alert('Your enrollment has character less than 5', userInput.value.length)
    return
  }
  school.enrollSchoolName(userInput.value);
  alert(`Congratulation, you have enroll ${userInput.value}`);
  userInput.value = "";

}
const unEnroll = ()=>{
  const currentSchoolName = localStorage.getItem('school_name');
  const msg = `You are near to completely unenroll ${currentSchoolName}`;
  if (confirm(msg)){
    school.unEnroll()
  }
}
const updateSchoolName = ()=>{
  const currentSchoolName = localStorage.getItem('school_name');
  const newName = prompt('Inter a new school name', currentSchoolName);
  if (newName.trim() === "") return
  if (newName !== currentSchoolName){
    school.updateEnrolled(newName);
    alert('Update success');
  }else {
    console.log('The same statement!')
  }

}
</script>

<template>
  <div v-if="users.loading">
    <Loader />
  </div>
<!--  Slots-->
  <div v-if="users.isNotification">
    <Alerts>
      <template #alert>
        <div>
          <p class="fs-5 fw-bolder text-danger">{{users.errorMsg}}</p>
          <div class="my-3 text-end">
            <button class="btn btn-info" @click="users.getUsers()">Try again</button>
          </div>
        </div>
      </template>
    </Alerts>
  </div>
<!--  End slots-->

  <div class="container-fluid m-1" style="height: 100vh; font-family: Tahoma, Arial, SansSerif">
    <div class="bg-info p-2 text-center rounded-1">
      <h3>Dashboard <span v-if="school.isSchoolNameAvailable">for {{school.schoolName}}</span></h3>
    </div>

    <div
      class="card p-2 my-2 h-50 overflow-y-scroll"
      style="background: linear-gradient(65.6deg, #4e4e6c, #506350, #3c3b3b); color: #d3cbcb"
    >
      <div class="card-body">
        <div class="row">
          <!-- Enroll form of a new school -->
          <div class="my-2 text-end">
            <input type="text" v-model.trim="userInput"
                   @keyup.enter="saveSchoolName"
                   class="enroll_input"
                   placeholder="Kilimanjaro pri/secondary" />
            <button class="m-1 buttons" @click="saveSchoolName" :class="school.isSchoolNameAvailable ? 'myBtn':null " :disabled="school.isSchoolNameAvailable" :title="school.isSchoolNameAvailable? 'Restricted':'Enroll a new school name'"> <i class="bi bi-plus-lg"></i> Enroll new</button>
            <button class="m-1 buttons" :disabled="!school.isSchoolNameAvailable" :class="!school.isSchoolNameAvailable? 'myBtn':null" v-on:click="unEnroll" :title="!school.isSchoolNameAvailable? 'Restricted':`Unenroll ${school.schoolName}` "> <i class="bi bi-dash-lg"></i> Unenroll</button>
            <button class="m-1 buttons" :disabled="!school.isSchoolNameAvailable" :class="!school.isSchoolNameAvailable? 'myBtn':null" :title="!school.isSchoolNameAvailable? 'Restricted':'Update a school name'" @click="updateSchoolName"> <i class="bi bi-arrow-down-up"></i> Update name</button>
          </div>
          <hr>
          <!-- Table  -->
          <div class="table_holder mb-2 col-lg-7 col-sm-12">
            <table class="table table-dark table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Full name</th>
                  <th>Gender</th>
                  <th>Mathematics</th>
                  <th>Geography</th>
                  <th>Language</th>
                  <th>View</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="(user,index) in users.users" :key="user.id">
                  <td>{{index + 1}}</td>
                  <td>{{user.firstName}} - {{user.lastName}}</td>
                  <td>{{user.gender}}</td>
                  <td>{{user.subjects[0].marks}}</td>
                  <td>{{user.subjects[1].marks}}</td>
                  <td>{{user.subjects[2].marks}}</td>
                  <td><button class="btn btn-info">View</button></td>
                  <td> <button class="btn btn-primary">Update</button> </td>
                    <td> <button class="btn btn-danger">Delete</button></td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- End Table  -->

          <!-- Statistics   -->
          <div class="col-lg-5 col-sm-12">
            <div class="stat-container">
              <!--                   Total-->

              <div class="card">
                <div class="card-header text-center">TOTAL</div>
                <div class="card-body d-flex justify-content-center">
                  <div
                    class="total-shape rounded-pill bg-success d-flex justify-content-center align-items-center"
                  >
                    {{users.users.length}}
                  </div>
                </div>
              </div>

              <!--                   End total-->
              <!--      Male        -->
              <div class="card">
                <div class="card-header text-center">MALE</div>
                <div class="card-body d-flex justify-content-center">
                  <div
                    class="male-shape d-flex justify-content-center align-items-center rounded-pill"
                    style="background: rgb(234, 227, 136)"
                  >
                    {{ users.getTotalMales }}
                  </div>
                </div>
              </div>
              <!--      End Male      -->

              <!--      Female        -->
              <div class="card">
                <div class="card-header text-center">FEMALE</div>
                <div class="card-body d-flex justify-content-center">
                  <div
                    class="female-shape d-flex justify-content-center align-items-center rounded-pill"
                    style="background: rgb(138, 138, 232)"
                  >
                    {{users.getTotalFemales}}
                  </div>
                </div>
              </div>
              <!-- End Female  -->
            </div>
          </div>
          <!-- End statistics  -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stat-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 10px;
}
.total-shape,
.male-shape,
.female-shape {
  height: 45px;
  width: 45px;
  font-size: 25px;
  font-weight: bold;
  padding: 15px;
}
.total-shape:hover,
.male-shape:hover,
.female-shape:hover {
  transform: translateY(-12px);
  box-shadow: 4px 6px 5px 5px rgba(0, 0, 0, 0.3);
}
.table_holder{
  height: 300px;
  overflow-y: auto;
}
.myBtn{
  cursor: not-allowed;
  background-color: #a8a6a6;
}
.enroll_input{
  padding: 7px;
  border: none;
  outline: none;
  border-radius: 8px;
  font-size: 20px;
}
.buttons{
  /*background-color: #1f60b4;*/
  color: rgba(7, 7, 7, 0.93);
  padding: 5px 8px;
  border: none;
  border-radius: 9px;
}
</style>
