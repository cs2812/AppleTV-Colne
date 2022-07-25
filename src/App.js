import { Routes,Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import DashBord from './Pagess/DashBord';
import FAQ from './Pagess/FAQ';
import Footer from './Pagess/Footer';
import Home from './Pagess/Home';
import SearchPage from './Pagess/SearchPage';
import Show from './Pagess/Show';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<DashBord/>}/>
        <Route path="/search" element={<SearchPage/>}/>
        <Route path="/show" element={<Show/>}/>
      </Routes>

    </div>
  );
}

export default App;
