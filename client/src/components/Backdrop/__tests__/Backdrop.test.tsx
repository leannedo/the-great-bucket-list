import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Backdrop from '../index';

describe('<Backdrop />', () => {
  const handler = jest.fn();

  test('trigger closeModalHandler on clicking backdrop', () => {
    render(<Backdrop closeModalHandler={handler} />);
    fireEvent.click(screen.getByRole('button'));

    expect(handler).toHaveBeenCalledTimes(1);
  });
});
