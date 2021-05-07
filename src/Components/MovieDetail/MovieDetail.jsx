import React from "react";
import { useFormateDate } from '../../Hooks/UseFormateDate'

const MovieDetail = ({ movie }) => {

  return (
    <div className="row">
      <div className="col">
        <div className="card mb-3">
          <img src={movie.img} className="card-img-top" alt={movie.title} />
          <div className="card-body">
            <h5 className="card-title">{movie.title}</h5>
            <p className="card-text">{movie.description}</p>
            <p className="card-text"><small className="text-muted">Relase date: {useFormateDate(movie.release)}</small></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;