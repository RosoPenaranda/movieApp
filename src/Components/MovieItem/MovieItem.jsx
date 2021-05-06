import React from "react";
import { useFormateDate } from '../../Hooks/UseFormateDate'
import './movieItem.scss'
import show from '../../Assets/Static/img/ver.svg'
import trash from '../../Assets/Static/img/trash.svg'
const MovieItem = ({
  movie,
  index,
  handleShow,
  handleDelete,
  selected,
  handelOpenModal
}) => (


  <div className={(selected === index) ? "selected card mt-1 " : "card mt-1"}>
    <div className="card-body d-flex flex justify-content-between" >
      <div className="info">
        <h5>{movie.title}</h5>
        <p>Release Date: {useFormateDate(movie.release)}</p>
      </div>
      <div className="options d-flex flex-column">
        <div className="d-block d-lg-none" type="button" onClick={() => handelOpenModal({ movie, index })}>
          <img src={show} alt="show" className="icon" />
        </div>
        <div className="d-none d-lg-block" type="button" onClick={() => handleShow({ movie, index })}>
          <img src={show} alt="show" className="icon" />
        </div>
        <div className="" type="button" onClick={() => handleDelete(index)}>
          <img src={trash} alt="show" className="icon" />
        </div>
      </div>
    </div>
  </div>
);

export default MovieItem;