import React, { useState } from "react";

export default function AddMovieForm({ onAddMovie }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAddMovie(title);
    setTitle("");
  };

  return (
    // TODO: add a form to add a new movie
    <form className="add-movie-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Movie title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add Movie</button>
    </form>
  );
}
