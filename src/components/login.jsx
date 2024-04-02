import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

function Login() {
    const [userName, setUserName]= useState('')
    const [password, setPassword]= useState('')
    const navigate= useNavigate()
    function handleLogin(){
        axios({
            url:'http://localhost:5000/user?username='+userName,
            method:'get'
        }).then((res)=>{
            let user=res.data
            console.log(user);
            if(user[0].userName==userName && user[0].password==password){
                navigate('/profile')
            }
        }).catch((err)=>{
            console.log(err);
        })
    }
  return (
   <div className="card w-25 offset-4 col-4">
    <div className="card-header">
        <h1>Login</h1>
        <div className="card-body">
            <input value={userName} onChange={(e)=>setUserName(e.target.value)} type="text" placeholder="username" className="form-control my-3" />
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="text" placeholder="password" className="form-control my-3" />
        </div>
        <div className="card-footer">
            <Link to={'/register'}>
            create your account
            </Link>
            <button onClick={handleLogin}  className="btn btn-success float-end">login</button>
        </div>
    </div>
   </div>
  )
}

export default Login