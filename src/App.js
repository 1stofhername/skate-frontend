import { Route, Routes, useNavigation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './css/App.css';
import ProfileBar from './components/ProfileBar';
import Login from './components/Login';
import CheckIn from './components/CheckIn';
import SignUp from './components/SignUp';

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

  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/login" element={<Login />} />
    <Route path="/sign-up" element={<SignUp />} />
  </Routes>

  return (

    <div className="App">
      <header className="App-header">
       {isLoggedIn ? <ProfileBar handleLogout={handleLogout} activateCheckingIn={activateCheckingIn} />:null}
      </header>
      {isCheckingIn && isLoggedIn ? <CheckIn />:null}
      {!isLoggedIn ? <Login handleLogin={handleLogin} />:null}
      <SignUp />
    </div> 

  );
}

export default App;
