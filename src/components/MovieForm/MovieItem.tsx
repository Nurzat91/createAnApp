import React from 'react';
import {Movie} from '../../types';

interface MovieProps {
  movie: Movie;
  onDelete: (id: number) => void;
  onUpdate: (id: number, title: string) => void;
}

const MovieItem: React.FC<MovieProps> = React.memo(({ movie, onDelete, onUpdate }) => {

  return (
    <form className="d-flex" key={movie.id}>
      <input
        className="form-control m-2"
        type="text"
        value={movie.title}
        onChange={(e) => onUpdate(movie.id, e.target.value)}
      />
      <button className="btn-close m-3" type="button" onClick={() => onDelete(movie.id)}></button>
    </form>
  );
});

export default MovieItem;