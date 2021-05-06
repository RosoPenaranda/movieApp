import React from "react";
import { connect } from "react-redux";
import MoviesList from "../Components/MovieList/MoviesList";
import DetailsSection from "../Components/DetailsSection/DetailsSection";
import ModalDetailsSection from "../Components/ModalDetailsSection/ModalDetailsSection"
import { showMovie, deleteMovie } from "../Redux/Actions/moviesActions"

const Home = ({
  movieList,
  movieDetails,
  showMovie,
  selected,
  deleteMovie,
  modalIsOpen
}) => {


  const handelOpenModal = (payload) => {
    payload.modalIsOpen = true
    showMovie(payload)
  };

  const handelCloseModal = () => {
    showMovie({ movie: null, index: null, modalIsOpen: false })
  };

  return (
    <>
      <main className="main__home">
        <div className="container">
          <div className="row">
            <MoviesList
              movieList={movieList}
              showMovie={showMovie}
              deleteMovie={deleteMovie}
              selected={selected}
              handelOpenModal={handelOpenModal}
            />
            <DetailsSection
              movieDetails={movieDetails}
            />
          </div>
        </div>
      </main>
      <ModalDetailsSection
        isOpen={modalIsOpen}
        onClose={handelCloseModal}
        movieDetails={movieDetails}
      />
    </>
  );
};


const mapStateToProps = (state) => {
  return {
    movieList: state.moviesList,
    movieDetails: state.movieDetails,
    selected: state.selected,
    modalIsOpen: state.modalIsOpen
  };
};
const mapToDispatchToPros = {
  showMovie,
  deleteMovie,
};

export default connect(mapStateToProps, mapToDispatchToPros)(Home);
