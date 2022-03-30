import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import NavMenu from './components/NavMenu';
import Books from './pages/books';
import Categories from './pages/categories';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <h1>Bookstore CMS</h1>
          <NavMenu />
        </header>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
