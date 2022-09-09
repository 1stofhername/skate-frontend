import { Route, Routes, useNavigation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ProfileBar from './components/ProfileBar';
import Login from './components/Login';
import CheckIn from './components/CheckIn';
import SignUp from './components/SignUp';
import SkateparksMapContainer from './components/SkateparksMapContainer';
import './css/App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(window.sessionStorage.getItem('isLoggedIn'));
  const [user, setUser] = useState(JSON.parse(window.sessionStorage.getItem('user')));
  const [isCheckingIn, setIsCheckingIn] = useState(false);
  const [skateparks, setSkateparks] = useState("");

  useEffect(()=>{
    fetch('http://localhost:9292/skateparks')
    .then((r)=>r.json())
    .then((data)=>setSkateparks(data))
  },[]);
  
  function handleLogin (data) {
      const {email, password}=data;
        fetch(`http://localhost:9292/login/${email}&${password}`)
        .then((r)=>r.json())
        .then((data)=>window.sessionStorage.setItem('user', JSON.stringify(data)))
        .then(()=>setUser(JSON.parse(window.sessionStorage.getItem('user'))))
        .then(()=>window.sessionStorage.setItem('isLoggedIn', 'true'))
        .then(()=>setIsLoggedIn(window.sessionStorage.getItem('isLoggedIn')))
  };

  function handleLogout () {
    handleCheckout();
    window.sessionStorage.removeItem('isLoggedIn');
    setIsLoggedIn(JSON.parse(window.sessionStorage.getItem('isLoggedIn')));
    window.sessionStorage.removeItem('user');
    setUser(JSON.parse(window.sessionStorage.getItem('user')));
  }

  const renderCheckIn = () => {
    setIsCheckingIn(true);
    console.log(isCheckingIn)
  }

  function handleCheckIn (skatepark, category) {
    fetch(`http://localhost:9292/users/checkin/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "checkedIn": true,
        "skatepark_name": skatepark,
        "category_name": category
      }),
    })
    .then((r)=> r.json())
    .then((data)=>window.sessionStorage.setItem('user', JSON.stringify(data)))
    .then(()=>setUser(JSON.parse(window.sessionStorage.getItem('user'))))
    .then(()=>setIsCheckingIn(false))
  };

  function handleCheckout () {
    fetch(`http://localhost:9292/users/checkout/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "checkedIn": false,
        "skatepark_id": null
      }),
    })
    .then((r)=> r.json())
    .then((data)=>window.sessionStorage.setItem('user', JSON.stringify(data)))
    .then(setUser(JSON.parse(window.sessionStorage.getItem('user'))))
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
       {isLoggedIn && user ? 
        <ProfileBar 
          handleLogout={handleLogout} 
          renderCheckIn={renderCheckIn} 
          handleCheckout={handleCheckout} 
          isCheckingIn={isCheckingIn}
          user={user} /> :
          null
          }
      </header>
      {isLoggedIn && isCheckingIn ? 
        <CheckIn 
          userId={user.id} 
          skateparkId={user.skatepark_id} 
          categoryId={user.category_id}
          handleCheckIn={handleCheckIn}  
          />:
          null
      }
      {!isLoggedIn ? <div id="login-form"><Login handleLogin={handleLogin} handleSignUpClick={handleSignUpClick} /></div>:null}
      <div id="signup-form" hidden><SignUp /></div>
      {isLoggedIn ? <SkateparksMapContainer />:null}
    </div> 

  );
}

export default App;
