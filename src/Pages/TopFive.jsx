import React, { useEffect } from "react";
import { connect } from "react-redux";
import TopFiveitems from "../Components/TopFiveItems/TopFiveItems";
import Loading from "../Components/Loading/Loading";
import { getTopFive } from "../Redux/Actions/moviesActions"

const TopFive = ({ topFive, loading, error, getTopFive }) => {
  useEffect(() => {
    if (topFive.length === 0 && error !== null) getTopFive();

  });

  if (loading)
    return <Loading />

  return (
    <main className="main__topFive container">
      <div className="row">
        <div className="col pt-2">
          <h1>TOP 5 Movies</h1>
        </div>
      </div>
      <div className="row">
        <div className="col border rounded">
          {(error) ?
            <div class="alert alert-danger my-5" role="alert">
              {error}
            </div>
            : topFive.map((movie, index) => {
              return <TopFiveitems key={index} movie={movie} />
            })}
        </div>
      </div>
    </main>
  );
};



const mapStateToProps = (state) => {
  return {
    topFive: state.topFive,
    loading: state.loading,
    error: state.error,
  };
};
const mapToDispatchToPros = {
  getTopFive,
};

export default connect(mapStateToProps, mapToDispatchToPros)(TopFive);
