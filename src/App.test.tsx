import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Check render', () => {

  test('renders portfolio', () => {
    const { container } = render(<App />);
    const sideContent = container.querySelector('aside.side-content');

    expect(sideContent).toBeInTheDocument();
    const mainContent = container.querySelector('main.main-content');

    expect(mainContent).toBeInTheDocument();
    expect(sideContent?.querySelector('.user-name')).toHaveTextContent(/Naveen/i);
  });
})

