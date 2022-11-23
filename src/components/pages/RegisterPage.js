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
    const shopnameRef = useRef('')

//    } 

    async function addUserHandler() {
        // console.log(districtRef);
        const user = {
            name: nameRef.current.value,
            state: stateRef.current.value,
            district: districtRef.current.value,
            
            email: emailRef.current.value,
            password: passwordRef.current.value,
            phno: phnoRef.current.value,
            shopname: shopnameRef.current.value
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
                    <select className='state' id="state" ref={stateRef} >
                    <option value="Kerala" >Kerala</option>
                    </select>
                    
                </p>
                <p>
                    <label htmlFor='district'>District</label><br/>
                    {/* <input type="text" name="first_name" required /> */}
                    <select className='state'  id="district" ref = {districtRef}>
                    <option district="Kasargod">Kasargod</option>
                    <option district="Kannur">Kannur</option>
                    <option district="Wayanad">Wayanad</option>
                    <option district="Malappuram">Kozhikode</option>
                    <option district="Malappuram">Malappuram</option>
                    <option district="Palakkad">Palakkad</option>
                    <option district="Thrissur">Thrissur</option>
                    <option district="Ernakulam">Ernakulam</option>
                    <option district="Idukki">Idukki</option>
                    <option district="Kottayam">Kottayam</option>
                    <option district="Alappuzha">Alappuzha</option>
                    <option district="Pathanamthitta">Pathanamthitta</option>
                    <option district="Kollam">Kollam</option>
                    <option district="Thiruvanathapuram">Thiruvanathapuram</option>
                    </select>
                </p>
                <p>
                    <label htmlFor='shopname'>Shope Name</label><br/>
                    <input type="shopename" shope_name="shopename" required ref = {shopnameRef} />
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
