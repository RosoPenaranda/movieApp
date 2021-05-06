import React from 'react';
import loading from '../../Assets/Static/img/loading_cinetop.gif'

const Loading = () => {
  return (
    <main className="main__topFive container">
      <div className="row">
        <div className="col d-flex justify-content-center align-items-center">
          <img src={loading} alt="loading" />
        </div>
      </div>
    </main>
  )
}

export default Loading;