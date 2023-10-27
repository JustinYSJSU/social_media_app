import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Registration } from './pages/Registration';
import { Login } from './pages/Login';

function App() {
  
  return (
    <div> 
      <Router>
        <Routes>
          <Route path="/home" element={<Home />}> </Route>
          <Route path="/register" element={<Registration />}> </Route>
          <Route path="/login" element={<Login />}> </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
