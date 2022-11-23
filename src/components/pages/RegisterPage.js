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
            shop_name: shopnameRef.current.value,
            emailId: emailRef.current.value,
            mobilenumber: phnoRef.current.value,
            password: passwordRef.current.value
           
        };
        const myJSON = JSON.stringify(user);
        console.log(myJSON);
        const response = await fetch('http://127.0.0.1:8000/api/signup/', {
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
                    <label htmlFor='shop_name'>Shope Name</label><br/>
                    <input type="text" shope_name="shop_name" required ref = {shopnameRef} />
                </p> 
                
                <p>
                    <label htmlFor='emailId' >Email address</label><br/>
                    <input type="email" id="emailId" ref={emailRef}/>
                </p>
                <p>
                    <label htmlFor='password'>Password</label><br/>
                    <input type="password" name="password" ref={passwordRef} required />
                </p>
                <p>
                    <label htmlFor='mobilenumber'>Phone Number</label><br/>
                    <input type="phno" name="mobilenumber" ref={phnoRef} required />
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
