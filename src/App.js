import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import { useState } from 'react';
import PagesOpen from './components/PagesOpen';
import NotFound from './pages/404NotFound';

function App() {
  const [mode, setMode] = useState(false);
  const [selectedCountries, setSelectedCountries] = useState(null);
  const [countries, setCountries] = useState([]);
  
  const handleMode = () => {
    setMode(!mode)
  }

  return (
   <Router>
    <Routes>  
      <Route path='*' element={<NotFound/>}  />   
      <Route 
        path='/' 
        element={<HomePage 
          mode={mode} 
          handleMode={handleMode}
          setSelectedCountries={setSelectedCountries} 
          countries={countries} 
          setCountries={setCountries}
          />}
      />
      <Route 
        path={`/country/:name`} 
        element={<PagesOpen 
          mode={mode}
          countries={countries}
          selectedCountries={selectedCountries}
          handleMode={handleMode}
          setSelectedCountries={setSelectedCountries}
          />
          }/>
    </Routes>
   </Router>
  );
}

export default App


