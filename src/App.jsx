import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes,Route, useNavigate, useLocation } from 'react-router-dom'
import Home from "./components/home"
import Login from './components/login'
import Register from './components/register'
import Profile from './components/profile'
import NotFount from './components/notFount'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
let blockPage=['/profil','/admin','/mentor']
const navigate = useNavigate()
const location = useLocation()

useEffect(()=>{
let token=JSON.parse(localStorage.getItem('token'))
if(blockPage.includes(location.pathname)){
  axios({
    url:'http://localhost:5000/users/'+token,
    method:'get',
    
}).then((res)=>{


}).catch((error)=>{
navigate('404')
})
}
},[location.pathname])
  return (
    <>
  
     
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/404' element={<NotFount/>}/>

    </Routes>
    

    </>
  )
}

export default App
