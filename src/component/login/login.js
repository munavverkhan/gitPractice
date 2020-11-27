import React, { useState } from 'react';
import './login.css';



export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [field, setField] = useState('');


    function submit() {
        if (email === "") {
            setField("please fill email")
        }
        else if (password === '') {
            setField("please fill password");
        }
        else {
            setField("");
            loginApi();
        }
    }
    function loginApi() {
        var data = { email: email, password: password }
        fetch("http://localhost:8080/login", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then((response) => {
                console.log(response)
                alert(response.message)
            }).catch((err) => { console.log(err) });

    }

    return (
        <div className='container'>
            <div className='subContainer'>
                <header>Login</header>  
                <p style={{color:"red",textAlign:'center',fontWeight:'bold'}}>{field}</p>

                <input className='email' type='text' placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br />
                <input className='password' type='text' placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} /><br />
                <input className='submit' type='submit' value='submit' onClick={()=>submit()} />

            </div>
        </div>
    )
}