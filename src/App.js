import { useState, useEffect } from 'react';
import './css/App.css';
import ProfileBar from './components/ProfileBar';
import Login from './components/Login';
import { CheckIn } from './components/CheckIn';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(JSON.parse(window.sessionStorage.getItem('isLoggedIn')));
  const [isCheckingIn, setIsCheckingIn] = useState(false);

  const activateCheckingIn = () => {
      setIsCheckingIn(true);
  }
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

    <div className="App">
      <header className="App-header">
       {isLoggedIn ? <ProfileBar handleLogout={handleLogout} activateCheckingIn={activateCheckingIn} />:null}
      </header>
      {isCheckingIn && isLoggedIn ? <CheckIn />:null}
      {!isLoggedIn ? <Login handleLogin={handleLogin} />:null}
    </div> 

  );
}

export default App;
