import logo from '../../logo.svg';
import { useState } from 'react';
import {Link } from 'react-router-dom';
import './SignUp.css';


function SignUp() {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });


  const setFirstName = (e) => {
    setState({...state, firstName: e.target.value })
  }
  const setLastName = (e) => {
    setState({...state, lastName: e.target.value })
  }
  const setEmail = (e) => {
    setState({...state, email: e.target.value })
  }

  const setPassword = (e) => {
    setState({...state, password: e.target.value })
  }

  return (
    <div className="App">
     
        <img src={logo}  alt="logo" />
        <p className='header'>Sign up</p>
        <input placeholder="First Name*" name="firstName" value={state.firstName} onChange={setFirstName}  /> 
      
        <input placeholder="Last Name*" name="lastName" value={state.lastName} onChange={setLastName}  /> 
        <br></br>
        <input  className='inputs' placeholder="Email*" name="email" value={state.email} onChange={setEmail}  /> 
        <br></br>
        <input  className='inputs' placeholder="Password*" name="password" type={'password'} value={state.password} onChange={setPassword} /> 
        <br></br>
        <div className='chexkbox'>
            <input type={'checkbox'} name="Remember me"/>
            <p>I want to recieve inspiration and updates via email.</p>
        </div>
       <button onClick={()=>{ console.log(state) }}>SIGN UP</button>
       <div className='chexkbox' id='blue'>
          <p>Already have an account? </p>
          <Link id='blue' to='/'> Sign In </Link>
        </div>
      
    </div>
  );
}

export default SignUp;