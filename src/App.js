
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import GetMovies from './components/GetMovies';
import Navbar from './components/Navbar';
import Trailers from './components/Trailers';
import UpcomingMovies from './components/UpcomingMovies';
import TopBoxOfficeMovies from './components/TopBoxOfficeMovies';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Navigate to='movies' />} />
        <Route path='movies' element={<GetMovies />} />
        <Route path='trailers' element={<Trailers />} />
        <Route path='upcoming-movies' element={<UpcomingMovies />} />
        <Route path='top-box-office' element={<TopBoxOfficeMovies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
