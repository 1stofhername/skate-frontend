import { useState, useEffect } from 'react';
import './css/App.css';
import ProfileBar from './components/ProfileBar';
import Login from './components/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(JSON.parse(window.sessionStorage.getItem('isLoggedIn')));
  // let isLoggedIn = JSON.parse(window.sessionStorage.getItem('isLoggedIn'));
  console.log(isLoggedIn);
  
  function handleLogin (data) {
    // const {email, password} = data;
    //   fetch(`http://localhost:9292/login/${email}&${password}`)
    //   .then((r)=>r.json())
    //   .then((data)=>{
    //     window.sessionStorage.setItem('user', JSON.stringify((data)));
    //   })
    //   .then(()=>{
        setIsLoggedIn(window.sessionStorage.setItem('isLoggedIn', 'true'));
      // })
  };

  function handleLogout () {
    setIsLoggedIn(window.sessionStorage.removeItem('isLoggedIn'));
    console.log(JSON.parse(window.sessionStorage.getItem('isLoggedIn')))
  }

  return (
    isLoggedIn ?
    <div className="App">
      <header className="App-header">
       <ProfileBar handleLogout={handleLogout} />
      </header>
    </div>:<Login handleLogin={handleLogin} />
  );
}

export default App;
