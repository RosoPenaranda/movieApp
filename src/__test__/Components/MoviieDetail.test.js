import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import MovieDetail from '../../Components/MovieDetail/MovieDetail';

describe('Test render component <MovieDetails />', () => {
  const movie = {
    title: 'titulo 1',
    release: '2200-10-05',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a mi dui. Aenean sed iaculis ex, at condimentum mauris. Integer aliquet ligula non accumsan fermentum. Quisque varius, magna vitae ultricies interdum, ex nulla placerat neque, ut rutrum velit libero non nulla.',
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTprFl-T1SMTy88qB98w1aux4Pib7p9zjCrGw&usqp=CAU',
  };

  test('Render title', () => {
    const component = render(<MovieDetail movie={movie} />);
    expect(component.container).toHaveTextContent(movie.title);
  });

  test('Render description', () => {
    const component = render(<MovieDetail movie={movie} />);
    expect(component.container).toHaveTextContent(movie.description);
  });
});
