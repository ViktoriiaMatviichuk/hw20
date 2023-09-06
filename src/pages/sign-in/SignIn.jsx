import logo from '../../logo.svg';
import {Link } from 'react-router-dom';
import { useState } from 'react';
import './SignIn.css';

function SignIn() {

  const [state, setState] = useState({
    email: '',
    password: ''
  });

  


  const setEmail = (e) => {
    setState({...state, email: e.target.value })
  }
  
  const setPassword = (e) => {
    setState({...state, password: e.target.value })
  }

  return (
    <div className="App">
     
        <img src={logo}  alt="logo" />
        <p className='header'>Sign in</p>
        
        <input className='inputs'  placeholder="Email*" name="email" value={state.email} onChange={setEmail}  /> 
        <br></br>
        <input className='inputs' placeholder="Password*" name="password" type={'password'} value={state.password} onChange={setPassword} /> 
        <br></br>
        <div className='chexkbox'>
            <input type={'checkbox'} name="Remember me"/>
            <p>Remember me</p>
        </div>
 
        <button onClick={()=>{ console.log(state) }}>SIGN IN</button>
        <div className='chexkbox' id='blue'>
          <p>Forgot password?</p>
          <p>Dont have an account? </p>
          <Link id='blue' to='/sign-up'>   Sign Up </Link>
        </div>

      
    </div>
  );
}

export default SignIn;