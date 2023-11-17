import React, { useState, useEffect } from 'react';
import {Movie} from '../../types';
import MovieForm from '../MovieForm/MovieForm';

const App: React.FC = () => {
  const startMovies: Movie[] = [
    { id: 1, title: 'Story of Kunning Palace' },
    { id: 2, title: ' Alchemy of Souls: Light and Shadow' },
  ];
  const [movies, setMovies] = useState<Movie[]>(startMovies);
  const [newMovieTitle, setNewMovieTitle] = useState('');

  useEffect(() => {
    const getStoredMovies = localStorage.getItem('movies');
    if (getStoredMovies) {
      setMovies(JSON.parse(getStoredMovies));
    } else {
      localStorage.setItem('movies', JSON.stringify(startMovies));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies));
  }, [movies]);

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