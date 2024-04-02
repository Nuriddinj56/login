import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes,Route,  } from 'react-router-dom'
import Home from "./components/home"
import Login from './components/login'
import Register from './components/register'
import Profile from './components/profile'
import NotFount from './components/notFount'

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/404' element={<NotFount/>}/>

    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
