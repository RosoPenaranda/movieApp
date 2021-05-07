import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import { useFormateDate } from '../../Hooks/UseFormateDate';

test('Test useFormateDate', () => {
  const date = useFormateDate('2021-05-06');
  expect(date).toBe('06/05/2021');
});
