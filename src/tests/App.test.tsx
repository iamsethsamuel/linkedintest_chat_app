import React, { ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import {  renderWithProviders } from './utils';

test('renders learn react link', () => {
  renderWithProviders(<App />)

  // const t = screen.getByText(/Hey/) 
  // expect(t).toBeInTheDocument()
});
