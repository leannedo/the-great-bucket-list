import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from '../index';

describe('<Input />', () => {
  const onChangeHandler = jest.fn();

  test('renders input correctly with label and default value', () => {
    render(
      <Input
        name="full_name"
        label="Full name"
        value="John Doe"
        onChange={onChangeHandler}
      />,
    );

    const input = screen.getByLabelText(/full name/i);

    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('John Doe');
  });

  test('trigger onChange handler when user types and renders input value', () => {
    const typedValue = 'John Doe';

    render(
      <Input name="full_name" label="Full name" onChange={onChangeHandler} />,
    );

    const input = screen.getByRole('textbox');

    userEvent.type(input, typedValue);

    expect(input).toHaveValue('John Doe');

    expect(onChangeHandler).toHaveBeenCalledTimes(typedValue.length);
    expect(onChangeHandler).toHaveBeenCalledWith(typedValue);
  });
});
