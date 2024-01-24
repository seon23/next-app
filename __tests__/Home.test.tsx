import Home from '@/app/page';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Home', () => {
  beforeEach(() => {
    render(<Home />);
  });

  it('renders a heading', () => {
    const eleTitle = screen.getByText(/^Home/);
    expect(eleTitle).toBeInTheDocument();

    // const heading = screen.getByRole('heading', { level: 2 });
    // expect(heading).toBeInTheDocument();

    // const heading2 = screen.getByRole('heading', { name: 'Home Page' });
    // expect(heading2).toBeInTheDocument();
  });
  it('renders a button', async () => {
    // const btn = screen.getByRole('button', { name: 'BTN' });
    // const btn = screen.getByText('BTN');
    const btn = await screen.findByRole('button', { name: 'Button' });
    expect(btn).toBeInTheDocument();
  });
});
