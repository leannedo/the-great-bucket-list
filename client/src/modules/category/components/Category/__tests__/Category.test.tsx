import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Category from '../index';
import { ICategory } from '../../../types';

describe('<Category />', () => {
  const onClickCallback = jest.fn();
  const category: ICategory = {
    id: 'cat-1',
    name: 'Cat 1',
    colorIndicator: '#000',
  };

  test('renders Category component', () => {
    render(<Category category={category} onClick={onClickCallback} />);
    expect(screen.getByText('Cat 1')).toBeInTheDocument();
  });

  test('trigger click callback on clicking category', () => {
    render(<Category category={category} onClick={onClickCallback} />);
    fireEvent.click(screen.getByText('Cat 1'));

    expect(onClickCallback).toHaveBeenCalledTimes(1);
    expect(onClickCallback).toHaveBeenCalledWith(category);
  });
});
