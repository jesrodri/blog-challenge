import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PostList from '../components/PostList';
import { api_posts } from '../api';

describe('<PostList />', () => {
  it('renders the POST LIST title', () => {
    render(<PostList api={api_posts} />);
    let title = screen.getByRole('heading', {  name: /post list/i});

    expect(title).toBeInTheDocument();
  });
});
