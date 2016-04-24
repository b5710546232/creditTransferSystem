<template>
  <div>
    <h1>Search</h1>
      <div class="row">
        <div class="col-lg-6">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Search for...">
            <span class="input-group-btn">
              <button class="btn btn-default" type="button">Go!</button>
            </span>
          </div><!-- /input-group -->
        </div><!-- /.col-lg-6 -->
      </div><!-- /.row -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg:"this is search page"
    }
  },
  methods: {
  }
}
</script>
