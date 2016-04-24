<template>
  <div>
    <h1>Transfer</h1>

    <div>
      <div class="input-group ">
        <span class="input-group-addon" >From  Faculty</span>
        <select class="form-control">
          <option>1</option>
        </select>
      </div>
    </div>

    <nav>
      <ul class="pager">
        <li><a v-link="'/std_info'">Previous</a></li>
        <li><a v-link="'/home'">Next</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg:"this is transfer page"
    }
  },
  methods: {
  }
}
</script>
