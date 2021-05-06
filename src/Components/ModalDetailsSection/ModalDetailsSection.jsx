import React from "react";
import Modal from "../Modal/Modal";

import MovieDetail from "../MovieDetail/MovieDetail"

const ModalDetailsSection = ({ isOpen, onClose, movieDetails }) => {

  const handleClose = () => {
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>

      <MovieDetail movie={movieDetails} />
      <div className="text-center">
        <button onClick={handleClose} className="btn-red btn mb-3">
          Cerrar
        </button>
      </div>
    </Modal>
  );
};

export default ModalDetailsSection;
