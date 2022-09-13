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
  const [isMapLoading, setIsMapLoading]=useState(true);
  const [isLoggingIn, setIsLoggingIn] = useState(true);
  const [isCheckingIn, setIsCheckingIn] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);
  
  const [user, setUser] = useState(JSON.parse(window.sessionStorage.getItem('user')));
  const [skateparks, setSkateparks] = useState("");
  
  const [activeCategory, setActiveCategory]=useState("");
  const [activeSkatepark, setActiveSkatepark]=useState("");
  
  const [errors, setErrors] = useState([]);
  const errorArray=[];

  ////// Server calls ///////

  useEffect(()=>{
    fetch('http://localhost:9292/skateparks')
    .then((r)=>r.json())
    .then((data)=>setSkateparks(data))
    .then(setIsMapLoading(false))
  },[]);

  // Login
  
  function handleLogin (data) {
      const {email, password}=data;
        fetch(`http://localhost:9292/login/${email}&${password}`)
        .then((r)=>r.json())
        .then(data=>handleUserChange(data))
        .then(()=>window.sessionStorage.setItem('isLoggedIn', 'true'))
        .then(()=>setIsLoggedIn(window.sessionStorage.getItem('isLoggedIn')))
  };

  // Check in

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
    .then(data=>handleUserChange(data))
    .then(()=>setIsCheckingIn(false))
    .then(setActiveSkatepark(skatepark))
    .then(setActiveCategory(category))
  };

  // Check out

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
    .then(data=>handleUserChange(data))
    .then(setActiveSkatepark(""))
    .then(setActiveCategory(""))
    .then(console.log(`active cat: ${activeCategory} activeP: ${activeSkatepark}`))
  }

  // Sign up

  function handleSignUp (data) {
    fetch('http://localhost:9292/users/signup', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        data
        ),
    })
    .then((r)=>r.json())
    .then((data)=>handleUserChange(data))
    .then(()=>{
      handleIsLoggedInChange(true)
    })
  }

  // State/attribute change handlers

  function handleLogout () {
    handleCheckout();
    window.sessionStorage.removeItem('isLoggedIn');
    setIsLoggedIn(JSON.parse(window.sessionStorage.getItem('isLoggedIn')));
    handleUserChange(null);
  }

  const handleIsCheckingInChange = () => {
    setIsCheckingIn(true);
    console.log(isCheckingIn)
  }

  function onSignUpClick () {
    handleIsSigningUpChange(true);
    toggleIsLoggingIn();
  }

  const handleUserChange = (data) => {
    window.sessionStorage.setItem('user', JSON.stringify(data));
    setUser(()=>JSON.parse(window.sessionStorage.getItem('user')));
  }

  const handleIsLoggedInChange = (boolean) => {
    console.log(boolean);
    window.sessionStorage.setItem('isLoggedIn', boolean);
    setIsLoggedIn(JSON.parse(window.sessionStorage.getItem('isLoggedIn')));
  }
  
  const handleIsSigningUpChange = (boolean) => {
    setIsSigningUp(boolean);
  }

  const toggleIsLoggingIn = ()=>{
    setIsLoggingIn(!isLoggingIn);
  }

  ///// Helper functions /////

  function validate (data) {
    for (const property in data) {
        if(property !== 'email') {
            if(data[property]){
            console.log('yes')
        } else {
            handleInvalidInput(property)
        } } else {
            if (data[property] && data[property].includes('@')){
                console.log('yes')
            } else {
                handleInvalidInput(property)
            }
        }
    }
}



function handleInvalidInput (value) {
        const text = value.replace('_', ' ');
        errorArray.push(`Invalid ${text}`);
        setErrors(errorArray)
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
          renderCheckIn={handleIsCheckingInChange} 
          handleCheckout={handleCheckout} 
          isCheckingIn={isCheckingIn}
          user={user}
          activeSkatepark={activeSkatepark}
          activeCategory={activeCategory} 
          /> :
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
      {!isLoggedIn && isLoggingIn ? 
        <div id="login-form">
          <Login 
            handleLogin={handleLogin} 
            onSignUpClick={onSignUpClick} 
            />
        </div>
        : null}
      {isSigningUp && !isLoggedIn ? <div id="signup-form">
        <SignUp 
          validate={validate} 
          errors={errors} 
          setErrors={setErrors} 
          handleSignUp={handleSignUp}
          />
      </div>:null}
        {isLoggedIn ? <SkateparksMapContainer skateparks={skateparks} isLoading={isMapLoading} />:null}
    </div> 

  );
}

export default App;
