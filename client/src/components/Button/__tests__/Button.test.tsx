import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from '../index';

describe('<Button />', () => {
  const onClickCallback = jest.fn();

  test('trigger click callback on clicking button', () => {
    render(
      <Button type="primary" onClick={onClickCallback}>
        Test button
      </Button>,
    );
    fireEvent.click(screen.getByRole('button', { name: 'Test button' }));

    expect(onClickCallback).toHaveBeenCalledTimes(1);
  });
});
