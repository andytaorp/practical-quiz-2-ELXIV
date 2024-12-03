import React, { useState } from "react";
import AddMovieForm from "./AddMovieForm";
import MovieList from "./MovieList";



function App() {
  const [movies, setMovies] = useState([]);

  const handleAddMovie = (title) => {
    // TODO: Implement adding a new movie to the list
    const newMovie = {
      id: Date.now(),
      title,
      watched: false,
    };
    setMovies((prevMovies) => [...prevMovies, newMovie]);
  };

  const handleToggleWatched = (id) => {
    // TODO: Implement toggling a movie's watched status
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id ? { ...movie, watched: !movie.watched } : movie
      )
    );
  };

  const handleDeleteMovie = (id) => {
    // TODO: Implement deleting a movie from the list
    setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
  };

  return (
    <div>
      <h1>Favorite Movies</h1>
      {/* TODO: Add AddMovieForm Component */}
      {/* TODO: Add MovieList Component */}
      <AddMovieForm onAddMovie={handleAddMovie} />
      <MovieList
        movies={movies}
        onToggleWatched={handleToggleWatched}
        onDeleteMovie={handleDeleteMovie}
      />
    </div>
  );
}

export default App;
