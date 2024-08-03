import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Signin from './pages/signIn';
import About from './pages/about';
import Signup from './pages/signUp';
import Profile from './pages/profile';

export default function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/> } />
      <Route path='/about' element={<About/>} />
      <Route path='/signin' element={<Signin/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/profile' element={<Profile/>} />
    </Routes>
  </BrowserRouter>
}
