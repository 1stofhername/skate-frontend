import { Route, Routes, useNavigation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ProfileBar from './ProfileBar';
import Login from './Login';
import CheckIn from './CheckIn';
import SignUp from './SignUp';
import SkateparksMapContainer from './SkateparksMapContainer';
import '../css/App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(window.sessionStorage.getItem('isLoggedIn'));
  const [isLoggingIn, setIsLoggingIn] = useState(true);
  const [isCheckingIn, setIsCheckingIn] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);
  
  const [user, setUser] = useState(JSON.parse(window.sessionStorage.getItem('user')));
  const [skateparks, setSkateparks] = useState("");
  
  const [activeCategory, setActiveCategory]=useState("");
  const [activeSkatepark, setActiveSkatepark]=useState("");

  const [loginError, setLoginError] = useState("");
  
  const [signupErrors, setSignupErrors] = useState([]);
  const errorArray=[];

  ////// Server calls ///////

  useEffect(()=>{
    fetch('http://localhost:9292/skateparks')
    .then((r)=>r.json())
    .then((data)=>setSkateparks(data))
  },[activeSkatepark]);

  // Login
  
  function handleLogin (data) {
      const {email, password}=data;
        fetch(`http://localhost:9292/login/${email}&${password}`)
        .then((r)=>(r.json()))
        .then(data=>{
          if(data.id) {
            handleUserChange(data);
            handleIsLoggedInChange(true);
          } else {
            setLoginError(data);
          }
        })
        // .then(data=>handleUserChange(data))
        // .then(()=>window.sessionStorage.setItem('isLoggedIn', 'true'))
        // .then(()=>setIsLoggedIn(window.sessionStorage.getItem('isLoggedIn')))
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
    .then(console.log(activeSkatepark))
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

  function handleDelete () {
    fetch(`http://localhost:9292/users/delete/${user.id}`, {
      method: "DELETE"
    })
    .then(handleLogout)
  }

  const handleIsCheckingInChange = () => {
    setIsCheckingIn(true);
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
        } else {
            handleInvalidInput(property)
        } } else {
            if (data[property] && data[property].includes('@')){
            } else {
                handleInvalidInput(property)
            }
        }
    }
}



function handleInvalidInput (value) {
        const text = value.replace('_', ' ');
        errorArray.push(`Invalid ${text}`);
        setSignupErrors(errorArray)
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
          handleDelete={handleDelete}
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
            error={loginError}
            />
        </div>
        : null}
      {isSigningUp && !isLoggedIn ? <div id="signup-form">
        <SignUp 
          validate={validate} 
          errors={signupErrors} 
          setErrors={setSignupErrors} 
          handleSignUp={handleSignUp}
          />
      </div>:null}
        {isLoggedIn ? <SkateparksMapContainer skateparks={skateparks} />:null}
    </div> 

  );
}

export default App;
