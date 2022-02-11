import { createContext, useReducer } from "react";
import MoviesReducer from "./reducers/MoviesReducer";
import movies from "../../api/movies.json";

const initialState = { movies, selectedMovie: null, comments: [] };

export const MoviesContext = createContext(initialState);

export default function MoviesProvider({ children }) {
  const [state, dispatch] = useReducer(MoviesReducer, initialState);

  function getMovieById(id) {
    dispatch({
      type: "GET_MOVIE",
      payload: id,
    });
  }

  function addReview(movieId, comment, stars) {
    dispatch({
      type: "ADD_REVIEW",
      payload: { id: `${Date.now()}`, movieId, comment, stars },
    });
  }

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        selectedMovie: state.selectedMovie,
        comments: state.comments,
        getMovieById,
        addReview,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}
