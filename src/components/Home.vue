<template>
  <div>
    <h1>HOME</h1>
    <h2>{{ msg }}</h2>
    <button class="btn btn-primary btn-lg"  v-link="'/std_info'">Next to StudentInfo</button>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      msg:"home page \n add some thing"
    }
  },
  methods: {
  }
}
</script>
