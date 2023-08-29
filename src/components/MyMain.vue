<script>
import LangFlag from "vue-lang-code-flags";
import { store ,  fetchMoviesByName } from "../store";

export default {
  components: {
    LangFlag,
  },
    data() {
        return {
            store
        };
    },
    methods: {
        fetchMoviesByName,
    },
    mounted() {
      fetchMoviesByName(`https://api.themoviedb.org/3/search/multi`)
    },
    components: { LangFlag }
};
</script>

<template>
  <div class="container">
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
            <li class="list-group-item"><strong>Original Language:</strong> <lang-flag :iso="`${singleMovie.original_language}`"></lang-flag></li>
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
  margin-top: 100px;
  padding-bottom: 100px;
  .card:hover{
    transform: scale(107.5%);
  }
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