import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../components/App';

describe('App Component', () => {
  test('renders loading state initially', () => {
    render(<App />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('renders main content after loading', async () => {
    render(<App />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByRole('button', { name: /View Questions/i })).toBeInTheDocument();
    });
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
  });

  test('renders the app container', () => {
    render(<App />);
    expect(screen.getByTestId('app-container')).toBeInTheDocument();
  });
});