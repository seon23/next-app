import About from '@/app/about/page';
import { fireEvent, screen, render } from '@testing-library/react';

describe('About page', () => {
  it('xxx', async () => {
    render(<About />);

    //   click 전: 'Name:'
    const spanBefore = screen.getByText(/^Name/);
    expect(spanBefore).toHaveTextContent('Name:');

    // click
    const btn = screen.getByRole('button', { name: 'Btn1' });
    fireEvent.click(btn);

    // Name: !!!
    const spanAfter = screen.getByText(/^Name/);
    expect(spanAfter).toHaveTextContent('Name: !!!');

    // make disable BTN2
    // expect(screen.getByRole('button', { name: 'BTTN' })).not.toBeDisabled();
    expect(screen.getByRole('button', { name: 'Btn2' })).toBeDisabled();
  });
});
