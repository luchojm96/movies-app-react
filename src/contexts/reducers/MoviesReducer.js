export default function MoviesReducer(state, action) {
  switch (action.type) {
    case "GET_MOVIE":
      return {
        ...state,
        selectedMovie: state.movies.find(
          (movie) => movie.id === action.payload
        ),
      };

    case "ADD_REVIEW":
      return {
        ...state,
        comments: [
          ...state.comments,
          {
            id: action.payload.id,
            movieId: action.payload.movieId,
            comment: action.payload.comment,
            stars: action.payload.stars,
          },
        ],
      };

    default:
      return state;
  }
}
