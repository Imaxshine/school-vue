<script setup>

</script>

<template>
  <div class="container-fluid">

   <div class="bg-info my-1 text-center p-2 rounded-1">
     <h3>About us</h3>
   </div>


      <div class="row p-4 overflow-scroll" style="height: 100vh;">
        <div class="col-lg-4 order-last col-md-auto col-sm-12">
            <div class="card">
              <div class="card-body">
                <div>
                  <img src="/student3.jpg" alt="image" width="100%;">
                </div>
              </div>
              <br>
            </div>
        </div>

        <div class="col-lg-7 col-sm-12">
          <div class="card">
            <div class="card-body">
              <div class="academic_issues p-3">
                <div class="Performance my-2">
                  <h4>Our Performance</h4>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus corporis distinctio dolor doloribus error excepturi impedit incidunt ipsum iste, iure laboriosam mollitia natus nemo nesciunt non numquam obcaecati omnis, quibusdam, sed tempore tenetur!
                </div>

                <div class="influence my-2">
                  <h4>What we influencing</h4>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad blanditiis, corporis eaque expedita fugiat harum maiores sunt tenetur? Ab corporis cumque delectus dolorum eaque eligendi enim, inventore ipsa officiis possimus quidem recusandae sapiente sed similique, temporibus ullam voluptatem. Animi asperiores at cumque eos fugiat labore perferendis ratione voluptatem. Dolorem expedita explicabo nesciunt tenetur veritatis vitae.
                </div>
              </div>
            </div>
            <br>
          </div>
        </div>
      </div>
  </div>
</template>

<style scoped>
img{
  padding: 1px;
  border-radius: 10px;
}
.container-fluid{
  font-family: DM Sans, Avenir, Helvetica, Arial, sans-serif;
}
.academic_issues{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 6px;
  border-radius: 10px;
  color: #131111;
  transition: background 2s ease-in-out 2s;
}
.academic_issues:hover{
  background: linear-gradient(90deg, #fda, #DDE, #3c8);
}
</style>
