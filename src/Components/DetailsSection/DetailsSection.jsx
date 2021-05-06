import React from "react";
import AddNew from "../Buttons/AddNew";
import MovieDetail from "../MovieDetail/MovieDetail"



const DetailsSection = ({ movieDetails }) => (
  <div className="d-none d-lg-block py-1 rounded border col-md-9">
    <AddNew />
    {(movieDetails !== null ? <MovieDetail movie={movieDetails} /> : null)}
  </div>
);

export default DetailsSection;