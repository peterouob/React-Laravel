import {Link} from "react-router-dom";

export default function Login(){
  const  onSubmit = (ev)=>{
    ev.preventDefault()
  }
    return (
      <form className="animated fadeInDown" onSubmit={onSubmit}>
                <h1 className="title">
                  Login into your Account
                </h1>
                <input type="text" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button className="btn btn-block">Login</button>
                <p className="message">
                  Not Register ? <Link to="/signup">Sign Up </Link>
                </p>
      </form>
    )
}
