import Home from './pages/Home'
import NotFound from './pages/NotFound';
import Movies from './pages/Movies';
import {
  Routes,
  Route,
  Link,
} from 'react-router-dom';

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
