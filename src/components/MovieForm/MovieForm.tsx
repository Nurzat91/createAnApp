import React from 'react';
import MovieItem from './MovieItem';
import {Movie} from '../../types';

interface MovieListProps {
  movies: Movie[];
  onDelete: (id: number) => void;
  onUpdate: (id: number, title: string) => void;
}

const MovieForm: React.FC<MovieListProps> = ({ movies, onDelete, onUpdate }) => {
  return (
    <div>
      <h3 className="m-2">To watch list:</h3>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} onDelete={onDelete} onUpdate={onUpdate} />
      ))}
    </div>
  );
};

export default MovieForm;