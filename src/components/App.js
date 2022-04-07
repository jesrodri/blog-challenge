import '../styles/App.css';
import PostList from './PostList';
import { api_posts } from "../api";

function App() {
  return (
    <div className="App">
      <PostList api={api_posts} />
    </div>
  );
}

export default App;
