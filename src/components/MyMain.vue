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
    <div class="row g-4 d-flex justify-content-center">
      <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center"
      v-for="singleMovie in store.moviesByNames">
        <div class="card position-relative overflow-hidden">
          <img class="card-img-top position-absolute"
          :src="singleMovie.poster_path ? `http://image.tmdb.org/t/p/w500/${singleMovie.poster_path}` : `../src/assets/img/no-image-available.png`"
          :class="singleMovie.poster_path ? '' : `mt-5`"
          :alt="singleMovie.title">
          <div class="on-hover-absolute position-absolute h-100 2-100">
            <div class="card-body text-white">
              <h5 class="card-title"><strong>{{ singleMovie.title ? singleMovie.title : "Tiolo sconosciuto"}}</strong></h5>
              <p class="card-text text-wrap overflow-hidden">{{ singleMovie.overview ? singleMovie.overview : "Nessuna descrizione disponibile."}}</p>
            </div>
            <ul class="list-group list-group-flush position-absolute">
              <!--<li class="list-group-item text-white"><strong>Titolo:</strong> {{ singleMovie.title }}</li>-->
              <li class="list-group-item text-white"
              :class="singleMovie.original_title ? '': 'fst-italic'"><strong>Titolo Originale:</strong> {{ singleMovie.original_title ? singleMovie.title : "Nessun titolo originale fornito" }}</li>
              <li class="list-group-item text-white"><strong>Lingua originale:</strong> <lang-flag class="border" :iso="`${singleMovie.original_language ? singleMovie.original_language.toLowerCase() : 'un'}`"></lang-flag></li>
              <!--<li class="list-group-item text-white"><strong>Voto: </strong> {{ Math.round( singleMovie.vote_average / 2 ) }}/5 ({{ singleMovie.vote_count }} recensioni)</li>-->
              <li class="list-group-item"><strong class="text-white">Voto:</strong>
                <div class="stars-outer ms-2 text-white">
                  <div class="stars-inner" :style="`width: ${reviewsVote(singleMovie.vote_average)};`"></div>
                </div>
              </li>
            </ul>
          </div>
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
  .card{
    box-shadow: 5px 5px 20px rgba(255, 255, 255, 0.084);
    background-color: #FCFBF7;
    width: 250px;
    height: 350px;
    border-color: grey;
  }
//Styles dependent to the hover on the movie card
  .card:hover{
    transform: scale(110%);
    cursor: pointer;
    .on-hover-absolute{
      background-color: rgba(0, 0, 0, 0.75);
      width: 100%;
      .card-body{
      display: block;
      }
      .card-title{
        font-size: 1.25rem;
      }
      .card-text{
        font-size: 0.75rem;
        height: 150px;
      }
      .list-group{
        width: 100%;
        display: block;
        font-size: 0.75rem;
        bottom: 20px;
        right: 0;
        li{
          background-color: transparent;
          border: none;
          line-height: 20px;
          padding: 0 1rem 0 1rem;
        }
      }
    }
  }
//Styles indipendent to the hover on the movie card
  .card-img-top{
    object-fit: cover;
  }
  .card-body{
  height: $bs-card-height;
  display: none;
    .card-title {
      white-space: wrap;
    }
  }
  .list-group{
    display: none;
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