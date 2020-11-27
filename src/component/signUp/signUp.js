import React, { useState } from 'react';
import './signUp.css';
export default function Reg() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('')
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [field, setField] = useState('')
const axios=require('axios');
    function signInApi() {
        // debugger;

         
         const proxyurl = "https://cors-anywhere.herokuapp.com/";

         
         
      
         
        const data = {
            email: email,

            password: password,
            name: name,
            age: age,
            gender: gender,
            isActive: true,
            userType: "User"

        }   

        fetch("http://localhost:8080/process_post",{
             method:"post",
             headers:{
                 "Content-Type":"application/json"
             },
             body:JSON.stringify(data)
         })
          .then(response=>response.json())
          .then((response)=>{
              console.dir(response.message);
              console.log(response);
              setEmail("");
              setName("");
              setPassword("");
              setAge("");
              setGender("");
          }).catch((err)=>{console.log(err)});
        
    }

    function submit() {
        console.log("email:" + email + ",name:" + name + ",password:" + password + ",gender:" + gender)

        if (email == "") {
            setField("plese fill email")
        }
        else if (name === '') {
            setField("plese fill name")
        }
        else if (password === '') {
            setField("plese fill password")
        }
        else if (age === '') {
            setField("plese fill age")
        }
        else if (gender === '') {
            setField("plese fill gender")
        }
        else {
            setField('')
            signInApi();
        }
    }

    return (
        <div className='body'>
            <div className='content'>
                
            <header>Sign Up</header>
            <header style={{ color: "red" }}>{field}</header>
            <div className="name " >
                <input className='box' type='text' placeholder="User name" value={name} onChange={(e) => { setName(e.target.value) }} />
            </div>
            <div className='email'>
                <input className='box' type='text' placeholder="Email"value={email} onChange={(e) => { setEmail(e.target.value) }} />
            </div>
            <div className='passowrd'>
                <input className='box' type='text' placeholder="Password"value={password} onChange={(e) => { setPassword(e.target.value) }} />
            </div>
            <div className='age'>
                <input className='box' type='text' placeholder="Age" value={age} onChange={(e) => { setAge(e.target.value) }} />
            </div>
            <div>
                <select name="gender" className="dropDown"  onChange={(e) => { setGender(e.target.value) }}>
                <option value='Others'>Others</option>
                    <option value="Male">Male</option>
                    <option value='Female'>Female</option>
                    
                </select>
            </div>
            <div>
                <input type='submit' value="Sign In" onClick={() =>submit() } />
            </div>
            </div>
        </div>
    )
}

