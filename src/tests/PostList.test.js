import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PostList from '../components/PostList';

describe('<PostList />', () => {
  it('renders the POST LIST title', () => {
    render(<PostList />);
    let title = screen.getByRole('heading', {  name: /post list/i});

    expect(title).toBeInTheDocument();
  })
})
