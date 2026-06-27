<script setup>
import { ref, onMounted } from 'vue'
const userInput = ref('')
import Loader from '@/view/Loader.vue'
import Alerts from '@/view/Alerts.vue'
import { useSchoolStore } from '@/stores/schoolStore'
import { useUsersStore } from '@/stores/usersStore'
import {useUpdateStore} from '@/stores/updateStore';

const update = useUpdateStore();
const school = useSchoolStore()
const users = useUsersStore()
onMounted(() => {
  users.getUsers()
})
// console.log(`Females: ${users.getTotalFemales}`)
function saveSchoolName() {
  if (userInput.value === '') {
    return
  }
  if (school.isSchoolNameAvailable) {
    alert('You have already enroll an exist one')
    return
  }
  if (userInput.value.length < 5) {
    alert('Your enrollment has character less than 5', userInput.value.length)
    return
  }
  school.enrollSchoolName(userInput.value)
  alert(`Congratulation, you have enroll ${userInput.value}`)
  userInput.value = ''
}
const unEnroll = () => {
  const currentSchoolName = localStorage.getItem('school_name')
  const msg = `You are near to completely unenroll ${currentSchoolName}`
  if (confirm(msg)) {
    school.unEnroll()
  }
}
const updateSchoolName = () => {
  const currentSchoolName = localStorage.getItem('school_name')
  const newName = prompt('Inter a new school name', currentSchoolName)
  if (newName.trim() === '') return
  if (newName !== currentSchoolName) {
    school.updateEnrolled(newName)
    alert('Update success')
  } else {
    console.log('The same statement!')
  }
}

</script>

<template>
      <!-- Update Dialog  -->
  <dialog class="dialog-1" open>
    <div>
      <form>
        <label for="first">First name</label>
      </form>
    </div>
  </dialog>
      <!--  End Dialog      -->
  <!-- Loading... -->
  <div v-if="users.loading">
    <Loader />
  </div>

  <!--  Slots-->
  <div v-if="users.isNotification">
    <Alerts>
      <template #alert>
        <div>
          <p class="fs-5 fw-bolder text-danger">{{ users.errorMsg }}</p>
          <div class="my-3 text-end">
            <button class="btn btn-info" @click="users.getUsers()">Try again</button>
          </div>
        </div>
      </template>
    </Alerts>
  </div>
  <!--  End slots-->

  <div class="container-fluid overflow-y-scroll p-1" style="height: 100vh">
    <!-- School Title -->
    <div class="row">
      <div class="col-12">
        <div class="bg-info rounded-1">
          <h4 class="text-center p-2">
            Dashboard <span v-if="school.isSchoolNameAvailable">for {{ school.schoolName }}</span>
          </h4>
        </div>
      </div>
    </div>

    <!--  Settings & Enrollment  -->
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Enrolment
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <!-- Enroll form of a new school -->
            <div class="my-2 text-end">
              <input
                type="text"
                v-model.trim="userInput"
                @keyup.enter="saveSchoolName"
                class="enroll_input"
                placeholder="Kilimanjaro pri/secondary"
              />
              <button
                class="m-1 buttons"
                @click="saveSchoolName"
                :class="school.isSchoolNameAvailable ? 'myBtn' : null"
                :disabled="school.isSchoolNameAvailable"
                :title="school.isSchoolNameAvailable ? 'Restricted' : 'Enroll a new school name'"
              >
                <i class="bi bi-plus-lg"></i> Enroll new
              </button>
              <button
                class="m-1 buttons"
                :disabled="!school.isSchoolNameAvailable"
                :class="!school.isSchoolNameAvailable ? 'myBtn' : null"
                v-on:click="unEnroll"
                :title="
                  !school.isSchoolNameAvailable ? 'Restricted' : `Unenroll ${school.schoolName}`
                "
              >
                <i class="bi bi-dash-lg"></i> Unenroll
              </button>
              <button
                class="m-1 buttons"
                :disabled="!school.isSchoolNameAvailable"
                :class="!school.isSchoolNameAvailable ? 'myBtn' : null"
                :title="!school.isSchoolNameAvailable ? 'Restricted' : 'Update a school name'"
                @click="updateSchoolName"
              >
                <i class="bi bi-arrow-down-up"></i> Update name
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--  Pupil's table  -->
    <div class="row mt-1">
      <div class="col-12">
        <div class="card">
          <div class="card-body overflow-y-scroll" style="height: 55vh">
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
                <tr v-for="(user, index) in users.users" :key="user.id">
                  <td>{{ index + 1 }}</td>
                  <td>{{ user.firstName }} - {{ user.lastName }}</td>
                  <td>{{ user.gender }}</td>
                  <td>{{ user.subjects[0].marks }}</td>
                  <td>{{ user.subjects[1].marks }}</td>
                  <td>{{ user.subjects[2].marks }}</td>
                  <td>
                    <RouterLink :to="{ name: 'uniq', params: { id: user.id } }" class="btn btn-info"
                      >View</RouterLink
                    >
                  </td>
                  <td><button class="btn btn-primary" @click="update.updateUser(user.id)">Update</button></td>
                  <td><button class="btn btn-danger">Delete</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- Statistic Title -->
    <div class="row my-2">
      <div class="col-12">
        <div class="stat_title text-center">
          <h3 class="p-1">STATISTIC'S</h3>
        </div>
      </div>
    </div>

    <!-- Statistics cards -->
    <div class="card_holder">
      <!--   Total-->
      <div class="card">
        <div class="card-header text-center">TOTAL</div>
        <div class="card-body d-flex justify-content-center">
          <div
            class="total-shape rounded-pill bg-success d-flex justify-content-center align-items-center">
            {{ users.users.length }}
          </div>
        </div>
      </div>
      <!--  End total-->

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
            {{ users.getTotalFemales }}
          </div>
        </div>
      </div>
      <!-- End Female  -->

    </div>
  </div>
</template>

<style scoped>
.stat_title {
  background: linear-gradient(75deg, #a6a0a5, #141310, #c5ede6);
  color: #fff;
}
.card_holder {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 25px;
  padding: 15px;
}
.total-shape, .female-shape, .male-shape{
  padding: 16px;
  height: 25px;
  width: 25px;
  border-radius: 50%;
}
input{
  padding: 7px;
  border: none;
  outline: none;
  border-left: 2px solid #000;
  border-right: 2px solid #000;
  border-radius: 10px;
  font-size: 14px;
}
.buttons{
  border: none;
  border-bottom: 3px solid #000;
}
.myBtn{
  cursor: no-drop;
}
.dialog-1{
  height: 100vh;
  width: 100vw;
  border: none;
  z-index: 2;
  background: rgba(0,0,0,0.4);
  backdrop-filter: blur(3px);
}
</style>
