import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
  searchParam: "futuro",
  moviesByNames: [],
  isLoading: false,
});

export function fetchMoviesByName(urls){
  store.isLoading = true;

  const requests = urls.map((url) =>
    axios.get(url, {
      params: {
        api_key: "1a54566c4b622d6f7844dcfb60ce2da5",
        query: `${store.searchParam}`,
        language: "it-IT",
      },
    })
  );
  
  console.log(requests)
  axios.all(requests).then((responses) => {
    store.moviesByNames = [];

    responses.forEach((resp) => {
      store.moviesByNames.push(...resp.data.results);

      setTimeout(() => {
        store.isLoading = false;
      }, 500);
    });
  });
};

export function reviewsVote(vote) {
  const voteNum = parseFloat(vote);
  const voteInFifths = voteNum / 2;
  const votePercentage = (voteInFifths / 5) * 100;
  const votePercentageRounded = `${((votePercentage / 10) * 10)}%`;
  console.log(votePercentageRounded)
  return votePercentageRounded;
}