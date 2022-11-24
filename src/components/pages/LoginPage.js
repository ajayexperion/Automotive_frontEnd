
import { Link } from 'react-router-dom'
import axios from 'axios'
import React, { useRef } from 'react'
import '../../App.css'

export default function SignInPage() {
    const nameRef = useRef('');
    const passRef = useRef('');

    async function loginUserHandler(){
        const logindetail={
            name: nameRef.current.value,
            password: passRef.current.value
        }
        const respose=await axios.get('http://127.0.0.1:8000/api/login/',{params:logindetail})
        // const respose=await fetch('http://127.0.0.1:8000/api/mealitems/')
        
        alert(JSON.stringify(respose.data.satus))
        // console.log(respose)
        
    }






    return (
        <div className="text-center m-5-auto">
            <h2>Sign in to us</h2>
            <form >
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text" name="first_name"  ref={nameRef}required />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password" ref={passRef} required />
                </p>
                <p>
                    <button id="sub_btn" type="submit" onClick={loginUserHandler}>Login</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}
