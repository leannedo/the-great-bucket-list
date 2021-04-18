import React from 'react';
import { render, screen } from '@testing-library/react';
import PageTitle from '../index';

describe('<PageTitle />', () => {
  test('renders correctly with title', () => {
    render(<PageTitle title="Test title" />);
    expect(screen.getByText('Test title')).toBeInTheDocument();
  });
});
