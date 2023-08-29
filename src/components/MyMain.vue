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
  <div class="container pt-3">
    <div class="row g-5 d-flex justify-content-center">
      <div class="col-3"
      v-for="singleMovie in store.moviesByNames">
        <div class="card h-100" style="width: 18rem;">
          <img class="card-img-top"
          :src="`https://image.tmdb.org/t/p/original/${singleMovie.poster_path}`"
          :alt="singleMovie.title">
          <div class="card-body">
            <h5 class="card-title"><strong>{{ singleMovie.title }}</strong></h5>
            <p class="card-text">{{ singleMovie.overview }}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><strong>Title:</strong> {{ singleMovie.title }}</li>
            <li class="list-group-item"><strong>Original title:</strong> {{ singleMovie.original_title }}</li>
            <li class="list-group-item"><strong>Original Language:</strong> {{ singleMovie.original_language }}</li>
            <li class="list-group-item"><strong>Scored:</strong> {{ Math.round( singleMovie.vote_average / 2 ) }}/5 ({{ singleMovie.vote_count }} reviews)</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../scss/partials/variables" as *;
.container{
  margin-top: 75px;
  .card-body{
  height: $bs-card-height;
    .card-title {
      white-space: wrap;
    }
    .card-text{
      overflow: hidden;
      white-space: wrap;
    }
  }
}

</style>