import React from "react";
import img404 from "../../Assets/Static/img/404.png";

const NotFound = (props) => {
  return (
    <div className="container">
      <div className="row main__orders d-flex align-items-center">
        <div className="col-12 col-md-6 text-center text-md-right">
          <img src={img404} alt="404" />
        </div>
        <div className="col-12 col-md-6 text-center text-md-left">
          <span className="e404">404</span> <br />
          <h2 className="text-danger">Página no encontrada</h2>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
