import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="d-flex justify-content-around">
        <h1>Home</h1>
        <Link to={'/login'} className='btnn btn-info'>Login</Link>
    </div>
  )
}

export default Home