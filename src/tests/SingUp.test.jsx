import { describe, it, beforeEach, afterEach, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import SignUp from '../components/signUp/SignUp';
import api from '../api';
import '@testing-library/jest-dom/vitest';
import React from 'react';

// Mock modules
vi.mock('react-router-dom', () => ({
  useNavigate: vi.fn(),
}));

vi.mock('../api');

describe('SignUp Component', () => {
  const mockNavigate = vi.fn();

  beforeEach(() => {
    useNavigate.mockReturnValue(mockNavigate);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  // Test case: Renders the SignUp form correctly
  it('renders the SignUp form correctly', () => {
    render(<SignUp />);

    expect(screen.getByLabelText(/First name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Age/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });

  // Test case: Updates form data on input change
  it('updates form data on input change', () => {
    render(<SignUp />);

    fireEvent.change(screen.getByLabelText(/First name/i), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText(/Last name/i), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByLabelText(/Age/i), { target: { value: '30' } });
    fireEvent.change(screen.getByLabelText(/Username/i), { target: { value: 'johndoe' } });
    fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'Password123!' } });

    expect(screen.getByLabelText(/First name/i).value).toBe('John');
    expect(screen.getByLabelText(/Last name/i).value).toBe('Doe');
    expect(screen.getByLabelText(/Email/i).value).toBe('john.doe@example.com');
    expect(screen.getByLabelText(/Age/i).value).toBe('30');
    expect(screen.getByLabelText(/Username/i).value).toBe('johndoe');
    expect(screen.getByLabelText(/Password/i).value).toBe('Password123!');
  });

  // Test case: Handles API error during form submission
  it('handles API error during form submission', async () => {
    api.post.mockRejectedValue(new Error('Registration failed'));

    render(<SignUp />);

    fireEvent.change(screen.getByLabelText(/First name/i), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText(/Last name/i), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByLabelText(/Age/i), { target: { value: '30' } });
    fireEvent.change(screen.getByLabelText(/Username/i), { target: { value: 'johndoe' } });
    fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'Password123!' } });

    fireEvent.submit(screen.getByRole('button', { name: /Create U/i }));

    await waitFor(() => {
      expect(screen.getByText('Error occurred during registration.')).toBeInTheDocument();
    });
  });
});
