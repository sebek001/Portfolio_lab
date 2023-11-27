import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './Home/Home'
import Login from './Log/Login'
import Register from './Log/Register'
import Logout from './Log/Logout'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/logowanie' element={<Login />}/>
        <Route path='/rejestracja' element={<Register />}/>
        <Route path='/wylogowano' element={<Logout />}/>
      </Routes>
    </Router>
  );
}
