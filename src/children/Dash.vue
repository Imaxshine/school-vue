<script setup></script>

<template>
  <div class="container-fluid m-1" style="height: 100vh; font-family: Tahoma, Arial, SansSerif">
    <div class="bg-info p-2 text-center rounded-1">
      <h3>Dashboard</h3>
    </div>

    <div
      class="card p-2 my-2 overflow-auto"
      style="background: linear-gradient(65.6deg, #4e4e6c, #506350, #3c3b3b); color: #d3cbcb"
    >
      <div class="card-body">
        <div class="row">
          <!-- Table  -->
          <div class="col-lg-7 col-sm-12">
            <table class="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Full name</th>
                  <th>Gender</th>
                  <th>Mathematics</th>
                  <th>Language</th>
                  <th>Geography</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1</td>
                  <td>Emmanuel - Modest</td>
                  <td>ME</td>
                  <td>45</td>
                  <td>56</td>
                  <td>76</td>
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
                    {{ 50 }}
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
                    {{ 19 }}
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
                    {{ 31 }}
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
</style>
