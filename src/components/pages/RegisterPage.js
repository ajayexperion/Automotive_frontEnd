import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'



export default function SignUpPage() {

//    const Adduser = () => {
    const nameRef = useRef('');
    const stateRef = useRef('Kerala');
    const districtRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const phnoRef = useRef('');

//    } 

    async function addUserHandler() {
        // console.log(districtRef);
        const user = {
            name: nameRef.current.value,
            state: stateRef.current.value,
            district: districtRef.current.value,
            
            email: emailRef.current.value,
            password: passwordRef.current.value,
            phno: phnoRef.current.value
        };
        const response = await fetch('https://automotive-a56f3-default-rtdb.firebaseio.com/movies.json', {
          method: 'POST',
          body: JSON.stringify(user),
        //   headers: {
        //     'Content-Type': 'application/json'
        //   }
        });
        const data = await response.json();
        console.log(data);
      }

    return (
        <div className="text-center m-5-auto">
            <h2>Join us</h2>
            <h5>Create your Servive Center account</h5>
            <form action="/home">
                <p>
                    <label htmlFor='name'>Username</label><br/>
                    <input type="text" id="name" ref={nameRef} required />
                </p>

                <p>
                    <label htmlFor='state'>State</label><br/>
                    <select id="state" ref={stateRef} >
                    <option value="Kerala" >Kerala</option>
                    </select>
                    
                </p>
                <p>
                    <label htmlFor='district'>District</label><br/>
                    {/* <input type="text" name="first_name" required /> */}
                    <select  id="district" ref = {districtRef}>
                    <option value="Kasargod">Kasargod</option>
                    <option value="Kannur">Kannur</option>
                    <option value="Wayanad">Wayanad</option>
                    <option value="Malappuram">Malappuram</option>
                    <option value="Palakkad">Palakkad</option>
                    <option value="Thrissur">Thrissur</option>
                    <option value="Ernakulam">Ernakulam</option>
                    <option value="Idukki">Idukki</option>
                    <option value="Kottayam">Kottayam</option>
                    <option value="Alappuzha">Alappuzha</option>
                    <option value="Pathanamthitta">Pathanamthitta</option>
                    <option value="Kollam">Kollam</option>
                    <option value="Thiruvanathapuram">Thiruvanathapuram</option>
                    </select>
                </p>
                <p>
                    <label htmlFor='email' >Email address</label><br/>
                    <input type="email" id="email" ref={emailRef}/>
                </p>
                <p>
                    <label htmlFor='password'>Password</label><br/>
                    <input type="password" name="password" ref={passwordRef} required />
                </p>
                <p>
                    <label htmlFor='phno'>Phone Number</label><br/>
                    <input type="phno" name="phno" ref={phnoRef} required />
                </p>
                <p>
                    <button id="sub_btn" type="submit" onClick={addUserHandler}>Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}
