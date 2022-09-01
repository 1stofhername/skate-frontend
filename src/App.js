import { useState, useEffect } from 'react';
import './css/App.css';
import ProfileBar from './components/ProfileBar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('isLoggedIn') === 'true'
  );

  useEffect(() =>{
    localStorage.setItem('isLoggedIn', isLoggedIn);
  },[isLoggedIn]); 

  return (
    <div className="App">
      <header className="App-header">
       <ProfileBar />
      </header>
    </div>
  );
}

export default App;
