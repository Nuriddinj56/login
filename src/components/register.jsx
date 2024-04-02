import { Link,useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import axios from "axios"

function Register() {
    

const {register,handleSubmit,reset}= useForm()
const navigate = useNavigate()
function mySumbit(data){
    if(data.password==data.repeatPassword){
        delete data.repeatPassword
        axios({
            url:'http://localhost:5000/user',
            method:'post',
            data:data
        }).then((res)=>{
         navigate('/login')
    
        }).catch((error)=>{
    
        })
    }else{
        alert('password invali error')
    }
  
}
  return (
    <div className="card w-25 offset-4 col-4">
    <div className="card-header">
        <h1>Register</h1>
        <div className="card-body">
          <form id="btn1" onSubmit={handleSubmit(mySumbit)}>
          <input {...register('username')} type="text" placeholder="username" className="form-control my-3" />
            <input {...register('phoneNumber')} type="text" placeholder="phoneNumber" className="form-control my-3" />
            <input {...register('address')} type="text" placeholder="address" className="form-control my-3" />
            <input {...register('password')} type="text" placeholder="password" className="form-control my-3" />
            <input {...register('repeatPassword')} type="text" placeholder="repeatPassword" className="form-control my-3" />
          </form>
        </div>
        <div className="card-footer">
            <Link to={'/login'}>
            go to login page
            </Link>
            <button form="btn1"  className="btn btn-success float-end">singup</button>
        </div>
    </div>
   </div>
  )
}

export default Register