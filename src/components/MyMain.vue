<script>
import LangFlag from "vue-lang-code-flags";
import Loader from "./Loader.vue";
import { store ,  fetchMoviesByName ,  reviewsVote } from "../store";

export default {
  components: {
    LangFlag,
    Loader,
  },
    data() {
        return {
            store,
            urls: ["https://api.themoviedb.org/3/discover/movie","https://api.themoviedb.org/3/discover/tv"],
        };
    },
    methods: {
        fetchMoviesByName,
        reviewsVote,
    },
    mounted() {
      fetchMoviesByName(this.urls)
    },
    components: { LangFlag }
};
</script>

<template>
  <div class="container">
    <div class="row g-5 d-flex justify-content-center">
      <div class="col-3"
      v-for="singleMovie in store.moviesByNames">
        <div class="card h-100 overflow-hidden" style="width: 18rem;">
          <img class="card-img-top"
          :src="singleMovie.poster_path === null ? `../src/assets/img/no-image-available.png` : `http://image.tmdb.org/t/p/w500/${singleMovie.poster_path}`"
          :class="singleMovie.poster_path === null ? `mt-5` : ''"
          :alt="singleMovie.title">
          <!--
          <div class="card-body">
            <h5 class="card-title"><strong>{{ singleMovie.title ? singleMovie.title : "Tiolo sconosciuto"}}</strong></h5>
            <p class="card-text">{{ singleMovie.overview ? singleMovie.overview : "Nessuna descrizione disponibile"}}</p>
          </div>
          
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><strong>Titolo:</strong> {{ singleMovie.title }}</li>
            <li class="list-group-item"
            :class="singleMovie.original_title ? '': 'fst-italic'"><strong>Titolo Originale:</strong> {{ singleMovie.original_title ? singleMovie.title : "Nessun titolo originale fornito" }}</li>
            <li class="list-group-item"><strong>Lingua originale:</strong> <lang-flag class="border" :iso="`${singleMovie.original_language ? singleMovie.original_language : 'un'}`"></lang-flag></li>
            <li class="list-group-item"><strong>Voto:</strong> {{ Math.round( singleMovie.vote_average / 2 ) }}/5 ({{ singleMovie.vote_count }} recensioni)</li>
            <li class="list-group-item"><strong>Voto:</strong>
              <div class="stars-outer">
                <div class="stars-inner" :style="`width: ${reviewsVote(singleMovie.vote_average)};`"></div>
              </div>
            </li>
          </ul>
          -->
        </div>
      </div>
    </div>
  </div>
  <Loader v-if="store.isLoading"/>
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
    img{
      width: 285px;
      height: 430px;
    }
    .card-title {
      white-space: wrap;
    }
    .card-text{
      overflow: hidden;
      white-space: wrap;
    }
  }
  //Solution for vote to stars: https://webdesign.tutsplus.com/a-simple-javascript-technique-for-filling-star-ratings--cms-29450t
  .stars-outer {
    display: inline-block;
    position: relative;
    font-family: FontAwesome;
  }

  .stars-outer::before {
    content: "\f006 \f006 \f006 \f006 \f006";
  }

  .stars-inner {
    position: absolute;
    top: 0;
    left: 0;
    white-space: nowrap;
    overflow: hidden;
    width: 0;
    font-family: FontAwesome;
  }

  .stars-inner::before {
    content: "\f006 \f006 \f006 \f006 \f006";
    color: #f8ce0b;
  }
}
</style>