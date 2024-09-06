import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Login from '../components/login/login';
import '@testing-library/jest-dom/vitest'
import React from 'react';
import { Router } from 'react-router-dom';

test('renders login form correctly', () => {
    render(
      <Router>
        <Login />
      </Router>
    );
  
    expect(screen.getByLabelText(/Enter your username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Enter your password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Sign in/i })).toBeInTheDocument();
  });