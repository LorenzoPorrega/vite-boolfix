<script>
import { store ,  fetchMoviesByName } from "../store";

export default {
  data() {
    return {
      store
    }
  },
  methods: {
    fetchMoviesByName,
  },
  mounted(){
    
  },
};
</script>

<template>
  <div class="container">
    <div class="row d-flex justify-content-center">
      <div class="col-6">
        <input type="text"
        v-model="store.searchParam">
        <button type="button" class="btn btn-primary"
        @click="fetchMoviesByName()">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-6">

      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
