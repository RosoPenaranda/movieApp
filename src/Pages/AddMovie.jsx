import React from "react";
import { connect } from "react-redux";
import { addMovie } from "../Redux/Actions/moviesActions"
import Movieform from "../Components/MovieForm/MovieForm";

const AddMovie = ({ goHome, addMovie }) => {


  return (
    <main className="main__add">
      <Movieform addMovie={addMovie} />
    </main>
  );
};


const mapStateToProps = (state) => {
  return {
    goHome: state.goHome,
  };
};
const mapToDispatchToPros = {
  addMovie,
};

export default connect(mapStateToProps, mapToDispatchToPros)(AddMovie);
