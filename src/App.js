import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';
import SignUp from './pages/sigh-up/SignUp';
import SignIn from './pages/sign-in/SignIn';



function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='' element={<SignIn/> }/>
          <Route path='sign-up' element={<SignUp/>}/>
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;

