import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
  searchParam: "futuro",
  moviesByNames: {},
  moviesList: [],
  seriesList: [],
});

export function fetchMoviesByName(urls){
  /*
  const url = "https://api.themoviedb.org/3/search/movie";

  //console.log(store.searchParam);
  //console.log(store.moviesByNames);

  axios.get(url, {
    params: {
      api_key: "1a54566c4b622d6f7844dcfb60ce2da5",
      query: `${store.searchParam}`,
      language: "it-IT",
    }
  })
    .then((response)=>{
      //console.log(url)
      store.moviesByNames = response.data.results;
      //console.log("Funzione ricerca film per nome startata")
      //console.log(store.searchParam);
      //console.log(store.moviesByNames);
  });

  let urlMovies = `https://api.themoviedb.org/3/search/tv`;
  let urlSeries = `https://api.themoviedb.org/3/search/movie`;
  */

  console.log("Funzione fetchMovies startata");

  const requests = urls.map((url) => axios.get(url, {
    params: {
      aapi_key: "1a54566c4b622d6f7844dcfb60ce2da5",
      query: `${store.searchParam}`,
      language: "it-IT"
    }
  }));

  console.log(`Gli url sono: ${requests}`);

  axios.all(requests)
  .then((responses) => {
    responses.forEach((resp) => {
      store.moviesList = resp.data.results;
      store.seriesList = resp.data.results;
      console.log(store.moviesList);
      console.log(store.seriesList);
    });
  });

/*
  axios.all([
    axios.get(urlMovies, {
      params: {
        api_key: "1a54566c4b622d6f7844dcfb60ce2da5",
        query: `${store.searchParam}`,
        language: "it-IT",
      }}),
      axios.get(urlSeries, {
        params: {
          api_key: "1a54566c4b622d6f7844dcfb60ce2da5",
          query: `${store.searchParam}`,
          language: "it-IT",
      }}),
    ])
    .then(axios.spread((urlMovies, urlSeries) => {
      console.log("Axios multipla startata")
      store.moviesList = urlMovies.data.results;
      store.seriesList = urlSeries.data.results;
      console.log(store.moviesList)
      console.log(store.seriesList)
    }))
    .catch((error) => {
      next(error);
    });
    */
}