import React from "react";
import { connect } from "react-redux";
import { addMovie } from "../Redux/Actions/moviesActions"
import Movieform from "../Components/MovieForm/MovieForm";

const AddMovie = ({ addMovie }) => {


  return (
    <main className="main__add">
      <Movieform addMovie={addMovie} />
    </main>
  );
};


const mapToDispatchToPros = {
  addMovie,
};

export default connect(null, mapToDispatchToPros)(AddMovie);
