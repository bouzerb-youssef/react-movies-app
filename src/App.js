import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Add from './components/Add';
import Header from './components/header';
import Watched from './components/Watched';
import Watchlist from './components/Watchlist';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Watchlist />} />
          
          <Route path='/watched' element={<Watched />} />
          <Route path='/add' element={<Add />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
