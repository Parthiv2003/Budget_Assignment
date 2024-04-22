import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Component/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route exact path='/home' element={<Home/>}> </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
