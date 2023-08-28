import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
  searchParam: "",
  moviesByNames: [],
});

export function fetchMoviesByName(){
  const url = "https://api.themoviedb.org/3/search/movie";

  console.log(searchParam);
  console.log(moviesByNames);

  axios.get(url, {
    params: {
      api_key: "1a54566c4b622d6f7844dcfb60ce2da5",
      query: `${store.searchParam}`
    }
  })
    .then((response)=>{
      store.moviesByNames = response.data.results;
      console.log("Funzione ricerca film per nome startata")
      console.log(moviesByNames)
  });
  
  console.log(searchParam);
  console.log(moviesByNames);
}