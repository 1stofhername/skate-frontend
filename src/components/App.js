import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ProfileBar from './ProfileBar';
import Login from './Login';
import CheckIn from './CheckIn';
import AddSkateparkForm from './AddSkateparkForm';
import SignUp from './SignUpForm';
import SkateparksMapContainer from './SkateparksMapContainer';
import '../css/App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(window.sessionStorage.getItem('isLoggedIn'));
  const [isLoggingIn, setIsLoggingIn] = useState(true);
  const [isCheckingIn, setIsCheckingIn] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [isAddingSkatepark, setIsAddingSkatepark] = useState(false);
  
  const [user, setUser] = useState(JSON.parse(window.sessionStorage.getItem('user')));
  const [skateparks, setSkateparks] = useState("");
  const [categories, setCategories]=useState("");
  
  const [activeCategory, setActiveCategory]=useState("");
  const [activeSkatepark, setActiveSkatepark]=useState("");

  const [loginError, setLoginError] = useState("");
  
  const [signupErrors, setSignupErrors] = useState([]);
  const errorArray=[];

  ////// Server calls ///////

  useEffect(()=>{
    fetchCategories();
    fetchSkateparks();
    
  },[activeSkatepark]);

  function fetchSkateparks () {
    fetch('http://localhost:9292/skateparks')
    .then((r)=>r.json())
    .then((data)=>setSkateparks(data))
  };

  function fetchCategories () {
      fetch('http://localhost:9292/categories')
      .then((r)=>r.json())
      .then((data)=>setCategories(data))
  };

  // Login
  
  function handleLogin (data) {
      const {email, password}=data;
        fetch(`http://localhost:9292/login/${email}&${password}`)
        .then((r)=>(r.json()))
        .then(data=>{
          if(data.id) {
            handleUserChange(data);
            handleIsLoggedInChange(true);
            setLoginError("");
          } else {
            setLoginError(data);
          }
        })
  };

  // Check in

  function handleCheckInSubmit (formData) {
    console.log(JSON.stringify(formData));
    fetch(`http://localhost:9292/users/checkin/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then((r)=> r.json())
    .then(data=>handleUserChange(data))
    .then(()=>setIsCheckingIn(false))
    .then(setActiveSkatepark(formData.skatepark_name))
    .then(setActiveCategory(formData.category_name))
  };

  const toggleIsCheckingIn = () => {
    setIsCheckingIn(!isCheckingIn);
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
        "skatepark_id": null,
        "category_id": null,
      }),
    })
    .then((r)=> r.json())
    .then(data=>handleUserChange(data))
    .then(setActiveSkatepark(""))
    .then(setActiveCategory(""))
  }

  // Sign up

  function handleSignUp (formData) {
    fetch('http://localhost:9292/users/signup', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        formData
        ),
    })
    .then((r)=>r.json())
    .then((data)=>handleUserChange(data))
    .then(()=>{
      handleIsLoggedInChange(true);
      setIsSigningUp(false);
      setIsLoggingIn(true);
    })
  };

  function handleLoginClick () {
    setIsSigningUp(false);
    setIsLoggingIn(true);
  }

  // State/attribute change handlers

  function handleLogout () {
    handleCheckout();
    window.sessionStorage.removeItem('isLoggedIn');
    setIsLoggedIn(JSON.parse(window.sessionStorage.getItem('isLoggedIn')));
    handleUserChange(null);
  };

  function handleDelete () {
    fetch(`http://localhost:9292/users/delete/${user.id}`, {
      method: "DELETE"
    })
    .then(handleLogout)
  };

  function onSignUpClick () {
    handleIsSigningUpChange(true);
    toggleIsLoggingIn();
  }

  const handleUserChange = (data) => {
    window.sessionStorage.setItem('user', JSON.stringify(data));
    setUser(()=>JSON.parse(window.sessionStorage.getItem('user')));
  };

  const handleIsLoggedInChange = (boolean) => {
    window.sessionStorage.setItem('isLoggedIn', boolean);
    setIsLoggedIn(JSON.parse(window.sessionStorage.getItem('isLoggedIn')));
  };
  
  const handleIsSigningUpChange = (boolean) => {
    setIsSigningUp(boolean);
  };

  const toggleIsLoggingIn = ()=>{
    setIsLoggingIn(!isLoggingIn);
  };

  ///// Add Skatepark /////

  function handleSkateparkNotListed () {
    setIsCheckingIn(false);
    setIsAddingSkatepark(true);
  };

  function handleAddCancel (e){
    e.preventDefault();
    setIsCheckingIn(false);
    setIsAddingSkatepark(false);
  };

  function handleSkateparkAddSubmit (formData) {
    let newSkateparks = [];
    fetch('http://localhost:9292/skateparks/create',{
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify(
        formData
      ),
    })
    .then((r)=>r.json())
    .then((data)=>newSkateparks = [...skateparks, data])
    .then(()=>setSkateparks(newSkateparks))
    .then()
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
          renderCheckIn={toggleIsCheckingIn} 
          handleCheckout={handleCheckout} 
          isAddingSkatepark={isAddingSkatepark}
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
          handleCheckInSubmit={handleCheckInSubmit}  
          handleCheckInCancel={toggleIsCheckingIn}
          handleSkateparkNotListed={handleSkateparkNotListed}
          isCheckingIn={isCheckingIn}
          />:
          null
      }
      {isLoggedIn && isAddingSkatepark ?
      <AddSkateparkForm
      handleSkateparkAddSubmit={handleSkateparkAddSubmit}
      handleAddCancel={handleAddCancel}
       />:null
      }
      {!isLoggedIn && isLoggingIn ? 
        <div id="login-form">
          <Login 
            handleLogin={handleLogin} 
            onSignUpClick={onSignUpClick} 
            error={loginError}
            isLoggingIn={isLoggingIn}
            handleLoginClick={handleLoginClick}
            />
        </div>
        : null}
      {isSigningUp && !isLoggedIn ? <div id="signup-form">
        <SignUp 
          validate={validate} 
          errors={signupErrors} 
          setErrors={setSignupErrors} 
          handleSignUp={handleSignUp}
          handleLoginClick={handleLoginClick}
          />
      </div>:null}
        {isLoggedIn ? <SkateparksMapContainer categories={categories} skateparks={skateparks} activeSkatepark={activeSkatepark} />:null}
    </div> 

  );
}

export default App;
