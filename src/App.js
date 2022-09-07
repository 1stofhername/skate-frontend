import { Route, Routes, useNavigation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ProfileBar from './components/ProfileBar';
import Login from './components/Login';
import CheckIn from './components/CheckIn';
import SignUp from './components/SignUp';
import MapContainer from './components/MapContainer';
import './css/App.css';

function App() {
  // const isLoggedIn = JSON.parse(window.sessionStorage.getItem('isLoggedIn'));
  const [isLoggedIn, setIsLoggedIn] = useState(window.sessionStorage.getItem('isLoggedIn'));
  const user = JSON.parse(window.sessionStorage.getItem('user'));
  const [isCheckingIn, setIsCheckingIn] = useState(false);

  const renderCheckIn = () => {
      setIsCheckingIn(true);
  }
  // let isLoggedIn = JSON.parse(window.sessionStorage.getItem('isLoggedIn'));
  
  
  function handleLogin (data) {
      const {email, password}=data;
        fetch(`http://localhost:9292/login/${email}&${password}`)
        .then((r)=>r.json())
        .then((data)=>window.sessionStorage.setItem('user', JSON.stringify(data)))
        .then(()=>window.sessionStorage.setItem('isLoggedIn', 'true'))
        .then(()=>setIsLoggedIn(window.sessionStorage.getItem('isLoggedIn')))
  };

  function handleLogout () {
    window.sessionStorage.removeItem('isLoggedIn');
    setIsLoggedIn(JSON.parse(window.sessionStorage.getItem('isLoggedIn')));
    window.sessionStorage.removeItem('user');
  }

  function handleCheckout () {
    fetch(`http://localhost:9292/users/leave/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        checkedIn: false,
        skatepark_id: null
      }),
    })
    .then((r)=> r.json(console.log(r)))
  }

  function handleSignUpClick () {
    const signUp = document.getElementById('signup-form');
    const login = document.getElementById('login-form');
    signUp.removeAttribute('hidden');
    login.setAttribute('hidden', true);

  }

  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/login" element={<Login />} />
    <Route path="/sign-up" element={<SignUp />} />
  </Routes>

  return (

    <div className="App">
      <header className="App-header">
       {isLoggedIn && user ? <ProfileBar handleLogout={handleLogout} renderCheckIn={renderCheckIn} handleCheckout={handleCheckout} user={user} />:null}
      </header>
      {isCheckingIn && isLoggedIn === "true" ? <CheckIn />:null}
      {!isLoggedIn ? <div id="login-form"><Login handleLogin={handleLogin} handleSignUpClick={handleSignUpClick} /></div>:null}
      <div id="signup-form" hidden><SignUp /></div>
      {isLoggedIn ? <MapContainer />:null}
    </div> 

  );
}

export default App;
