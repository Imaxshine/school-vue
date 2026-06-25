<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useUsersStore } from '@/stores/usersStore'
const usersStore = useUsersStore()

const route = useRoute()

const getCurrentPupil = () => {
  return usersStore.users.find((p) => p.id === Number(route.params.id))
}
// console.log(getCurrentPupil())
</script>

<template>
  <div
    class="container-fluid d-flex justify-content-center align-items-center"
    style="height: 100vh"
  >
    <div v-if="usersStore.users.length === 0" class="mt-5 alert alert-danger text-center shadow-lg">
      No any pupil information were found! <RouterLink :to="{ name: 'dash' }">Go back</RouterLink>
    </div>

    <div
      v-if="usersStore.users.length > 0"
      class="row d-flex justify-content-center align-items-center overflow-y-auto p-3 shadow-lg"
    >
      <!-- Back button -->
      <div class="m-1 text-start">
        <RouterLink class="btn btn-dark" :to="{ name: 'dash' }">Go back</RouterLink>
      </div>
      <!-- Profile-->
      <div class="col-lg-3 col-sm-12">
        <div class="card">
          <div class="card-header text-center fw-bolder">
            {{ getCurrentPupil().firstName }} profile
          </div>
          <div class="card-body text-center">
            <!-- Male-->
            <p v-if="getCurrentPupil().gender === 'ME'">
              <img src="/male_icon.png" alt="profile_image" />
            </p>
            <!-- female -->
            <p v-else>
              <img src="/female_icon.png" alt="profile_image" />
            </p>
          </div>
        </div>
      </div>
      <!-- End profile  -->

      <!-- Details-->
      <div class="col-lg-9 col-sm-12">
        <div class="card">
          <div class="card-body">
            <div class="d-flex flex-column">
              <h4 class="text-center text-success">
                {{ getCurrentPupil().firstName }} {{ getCurrentPupil().lastName }}
              </h4>
              <hr />
              <!--Table -->
              <div class="overflow-x-auto">
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
              <!-- End Table -->
            </div>
          </div>
        </div>
      </div>
      <!-- End Details-->
    </div>
  </div>
</template>

<style scoped>
.container-fluid {
  background: linear-gradient(65.6deg, #506350, #4e4e6c, #3c3b3b);
}
.row {
  background: linear-gradient(65.6deg, #4e4e6c, #506350, #3c3b3b);
  color: #d3cbcb;
}
img {
  height: 150px;
  width: 150px;
  border-radius: 50%;
  border-bottom: 3px solid orangered;
  border-top: 3px solid green;
  padding: 2px;
}
</style>
