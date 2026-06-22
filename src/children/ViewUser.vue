<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useUsersStore } from '@/stores/usersStore'
const usersStore = useUsersStore()

const route = useRoute()

const getCurrentPupil = () => {
  const pupilData = ref([])
  pupilData.value = usersStore.users.find((p) => p.id === Number(route.params.id))
  return pupilData.value
}
</script>

<template>
  <div
    class="view_container container-fluid d-flex flex-column justify-content-center p-4 overflow-scroll"
    style="height: 100vh"
  >
    <div v-if="usersStore.users.length === 0" class="alert alert-danger text-center">
      No any pupil information were found!
    </div>
    <div v-if="usersStore.users.length > 0" class="view_parts">
      <!--Profile -->
      <div class="profile shadow-lg">
        <h2>Profile</h2>
        <!-- Male-->
        <p v-if="getCurrentPupil().gender === 'ME'">
          <img src="/male_icon.png" alt="profile_image" />
        </p>
        <!-- female -->
        <p v-else>
          <img src="/female_icon.png" alt="profile_image" />
        </p>
      </div>
      <!--End Profile -->
      <!--Main Body -->
      <div class="main overflow-scroll p-3">
        <h4>{{ getCurrentPupil().firstName }} - {{ getCurrentPupil().lastName }}</h4>
        <hr />
        <table class="table table-dark table-hover">
          <thead>
            <tr>
              <th>GENDER</th>
              <th>MATH'S</th>
              <th>GEOGRAPHY</th>
              <th>LANGUAGE</th>
              <th>TOTAL</th>
              <th>AVERAGE</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{{ getCurrentPupil().gender }}</td>
              <td>{{ getCurrentPupil().subjects[0].marks }}</td>
              <td>{{ getCurrentPupil().subjects[1].marks }}</td>
              <td>{{ getCurrentPupil().subjects[2].marks }}</td>
              <th>
                {{
                  Number(getCurrentPupil().subjects[0].marks) +
                  Number(getCurrentPupil().subjects[1].marks) +
                  Number(getCurrentPupil().subjects[2].marks)
                }}
              </th>
              <td>
                {{
                  Math.round(
                    (Number(getCurrentPupil().subjects[0].marks) +
                      Number(getCurrentPupil().subjects[1].marks) +
                      Number(getCurrentPupil().subjects[2].marks)) /
                      getCurrentPupil().subjects.length,
                  )
                }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--End Main Body -->
    </div>
  </div>
</template>

<style scoped>
.view_container {
  font-family: DM Sans, Avenir, Helvetica, Arial, sans-serif;
  background: rgba(7, 7, 7, 0.93);
}
.view_parts {
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 4px;
  padding: 16px 22px;
  border-radius: 10px;
  text-align: center;
}
.profile,
.main {
  background: linear-gradient(90deg, #fda, #dde, #3c8);
}
img {
  width: 100px;
  border: 2px solid blue;
  border-radius: 50%;
  padding: 5px 10px;
}
</style>