import fetch from 'isomorphic-fetch';

const API = {
  movies: {
    getTopFive: async () => {
      const datos = await fetch(
        'http://www.mocky.io/v2/5dc3c053300000540034757b'
      )
        .then(datos => {
          return datos.json();
        })
        .catch(error => {
          throw new Error(error);
        });

      return datos;
    },
  },
};

export default API;
