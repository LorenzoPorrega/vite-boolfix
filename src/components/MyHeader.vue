<script>
import { store ,  fetchMoviesByName } from "../store";

export default {
  data() {
    return {
      store,
      url: ["https://api.themoviedb.org/3/search/multi"],
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
  <nav class="navbar navbar-expand-xl fixed-top bg-black" data-bs-theme="dark">
    <div class="container-fluid px-5">
      <img class="logo" src="../assets/img/booflix-logo.png" alt="Bootstrap" width="125" height="50">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse ms-5" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 fs-5">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">TV Shows</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Movies</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Latests</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">My list</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="search-box form-control me-2" type="search" placeholder="Movies, TV shows & more" aria-label="Search"
          v-model="store.searchParam" autofocus
          @keyup.enter="fetchMoviesByName(this.url)">
          <button class="btn btn-outline-danger" type="button"
          @click="fetchMoviesByName(this.url)">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@use "../scss/partials/_variables.scss" as *;
.navbar{
  .logo:hover{
    cursor: pointer;
  } 
  .nav-link{
  //color: rgb(194, 194, 194);
  margin-left: 1rem;
  }
  .search-box{
    border-color: rgb(220, 26, 40);
  }
  .search-box:focus{
    border-color: rgb(241, 28, 42);
    box-shadow: 0 0 5px 0.5rem rgb(220, 26, 40, 0.25);
  }

  .btn-outline-danger:hover{
    background-color: var(--bs-btn-hover-bg);
  }
}
</style>
