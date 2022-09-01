import { useState, useEffect } from 'react';
import './css/App.css';
import ProfileBar from './components/ProfileBar';
import Login from './components/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loginStatus = (localStorage.getItem('isLoggedIn'));

  useEffect(() =>{
    localStorage.setItem('isLoggedIn', isLoggedIn);
  },[isLoggedIn]); 

  const handleLogIn = () => {
    setIsLoggedIn(true);
  }

  return (
    loginStatus === "true"?
    <div className="App">
      <header className="App-header">
       <ProfileBar />
      </header>
    </div>:<Login handleLogIn={handleLogIn} />
  );
}

export default App;
