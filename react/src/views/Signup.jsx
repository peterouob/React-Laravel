import {isRouteErrorResponse, Link} from "react-router-dom";
import {useRef, useState} from "react";
import axiosClient from "../axios-client.js";
import {useStateContext} from "../contexts/ContextProvider.jsx";

export default function Signup(){
  const nameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfRef = useRef()

  const {setUser,setToken} = useStateContext()
  const [errors,setErrors] = useState(null)
  const onSubmit = (ev)=>{
    ev.preventDefault()
    const payload = {
      name:nameRef.current.value,
      email:emailRef.current.value,
      password:passwordRef.current.value,
      password_conf:passwordConfRef.current.value,
    }
    // console.log(payload)
    axiosClient.post('/signup',payload)
      .then(({data})=>{
        setToken(data.token)
        setUser(data.user)
      })
      .catch(err=>{
        const res = err.response
        if(res && res.status === 422){
          // console.log(res.data.errors)
          setErrors(res.data.errors)
        }
      })
  }
    return (
        <div>
          <form className="animated fadeInDown" onSubmit={onSubmit}>
            <h1 className="title">
              SingUp for free
            </h1>
            {
              errors && <div className="alert">{Object.keys(errors).map(key=>(<p key={key}>
                {errors[key][0]}
              </p>))}</div>
            }
            <input ref={nameRef} placeholder="Full Name"/>
            <input ref={emailRef} type="text" placeholder="Email Address"/>
            <input ref={passwordRef}type="password" placeholder="Password"/>
            <input ref={passwordConfRef} type="password" placeholder="Password Confirmation"/>
            <button className="btn btn-block">SignUp</button>
            <p className="message">
              Already Registered ? <Link to="/login">Sign in </Link>
            </p>
          </form>
        </div>
    )
}
