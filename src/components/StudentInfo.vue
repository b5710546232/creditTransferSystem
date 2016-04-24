<template>
  <div>
    <h1>Student Information</h1>
    <br>
    <div>
      <div class="input-group input-group-lg">
        <span class="input-group-addon" id="sizing-addon2">First name : </span>
        <input type="text" class="form-control" placeholder="Fill First Name" aria-describedby="sizing-addon1">
      </div>
      <br>
      <div class="input-group input-group-lg">
        <span class="input-group-addon" id="sizing-addon2">Last name : </span>
        <input type="text" class="form-control" placeholder="Fill Last Name" aria-describedby="sizing-addon1">
      </div>
      <br>
      <div class="input-group input-group-lg">
        <span class="input-group-addon" id="sizing-addon2">Student ID : </span>
        <input type="text" class="form-control" placeholder="Fill Student Name" aria-describedby="sizing-addon1">
      </div>
      <br>
      <h2>From</h2>
      <br>
      <div class="input-group input-group-lg">
        <span class="input-group-addon" id="sizing-addon2">University : </span>
        <input type="text" class="form-control" placeholder="Fill University" aria-describedby="sizing-addon1">
      </div>
      <br>
      <div class="input-group input-group-lg">
        <span class="input-group-addon" id="sizing-addon2">Faculty : </span>
        <input type="text" class="form-control" placeholder="Fill Faculty" aria-describedby="sizing-addon1">
      </div>
      <br>
      <div class="input-group input-group-lg">
        <span class="input-group-addon" id="sizing-addon2">Major : </span>
        <input type="text" class="form-control" placeholder="Fill Major" aria-describedby="sizing-addon1">
      </div>
    </div>
    <nav>
  <ul class="pager">
    <li><a v-link="'/home'">Previous</a></li>
    <li><a v-link="'/transfer'">Next</a></li>
  </ul>
</nav>
  </div>
</template>
