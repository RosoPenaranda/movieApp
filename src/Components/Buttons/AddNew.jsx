import React from "react";
import { Link } from "react-router-dom";
import './Buttons.scss'

const AddNew = () => (
  <div className="row">
    <div className="col text-right py-2">
      <Link to="/addMovie" className="btn btn-red">Add New Movie</Link>
    </div>
  </div>
);

export default AddNew;