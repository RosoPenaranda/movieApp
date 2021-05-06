import React from "react";

const TopFiveitems = ({ movie }) => {


  return (
    <div className="card mb-3">
      <img className="d-block d-lg-none card-img-top" src={movie.image} alt={movie.title} />

      <div className="row d-flex flex-wrap">
        <div className="col-12 col-lg-4 d-none d-lg-block">
          <img src={movie.image} alt={movie.title} />
        </div>
        <div className="col-12 col-lg-8">
          <div className="card-body">
            <h5 className="card-title">{movie.title}</h5>
            <p className="card-text">{movie.description}</p>
            <p className="card-text"><small className="text-muted">{movie.release}</small></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFiveitems;