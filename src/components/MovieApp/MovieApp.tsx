import React, { useState } from 'react';
import {Movie} from '../../types';
import MovieForm from '../MovieForm/MovieForm';


const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [newMovieTitle, setNewMovieTitle] = useState('');

  const addMovie = () => {
    if (newMovieTitle !== '') {
      const id = movies.length > 0 ? movies[movies.length - 1].id + 1 : 1;
      const newMovie = {
        id: id,
        title: newMovieTitle,
      };
      setMovies([...movies, newMovie]);
      setNewMovieTitle('');
    }
  };

  const deleteMovie = (id: number) => {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies);
  };

  const updateMovieTitle = (id: number, updatedTitle: string) => {
    const updatedMovies = movies.map((movie) =>
      movie.id === id ? { ...movie, title: updatedTitle } : movie
    );
    setMovies(updatedMovies);
  };

  return (
    <div>
      <div className="d-flex">
        <input
          className="form-control"
          type="text"
          value={newMovieTitle}
          onChange={(e) => setNewMovieTitle(e.target.value)}
        />
        <button className="btn btn-outline-success ms-3" type="button" onClick={addMovie}>Add</button>
      </div>

      <MovieForm movies={movies} onDelete={deleteMovie} onUpdate={updateMovieTitle} />
    </div>
  );
};

export default App;