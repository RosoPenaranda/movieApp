import React from "react";
import MovieItem from "../MovieItem/MovieItem";

const MoviesList = ({
  movieList,
  showMovie,
  deleteMovie,
  selected,
  handelOpenModal
}) => {

  const viewMovie = (payload) => {
    showMovie(payload)
  }

  const handleDelete = (index) => {
    deleteMovie(index)
  }

  return (
    <div className="col-12 col-lg-3 py-1 border rounded">
      {movieList.map((movie, index) => {
        return <MovieItem
          key={index}
          selected={selected}
          movie={movie}
          index={index}
          handleShow={viewMovie}
          handleDelete={handleDelete}
          handelOpenModal={handelOpenModal}
        />
      })}
    </div>
  )
};

export default MoviesList;