import { useState } from 'react';
import '../css/form.css';
import axios from 'axios';
import { matchRoutes, renderMatches, useNavigate } from 'react-router-dom';

let baseUrl = 'http://localhost/api'

function Login(){
    let naviage = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [state,setState] = useState(false);
    const [message,setMessage] = useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();

        await axios.post(baseUrl + '/loginUser',{
            'email': email,
            'password': password
        }).then((res)=>{
            console.log(res.data);
            setMessage(res.data.message);
            setState(res.data.status);
            setTimeout(() => {
                setMessage('');
            }, 1500);
            if(state){
                setTimeout(() => {
                    naviage('/users');
                }, 1000);
            }
        }).catch((err)=>{
            console.log(err)
        })
    }

    return(
        <div className='container'>
                <h1>Log In</h1>
                <form onSubmit={handleSubmit}>
                    <input placeholder="Email" name="email" type="text" value={email} onChange={(e)=>setEmail(e.target.value)} required></input>
                    <input placeholder="Password" name="password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required></input>
                    <div className='buttonContainer'>
                        <button className='button2' type='submit'>Log in</button>
                    </div>
                </form>
                <div className='message' style={{background: state ? 'green' : 'red', display: message=='' ? 'none' : 'block'}}>
                    <h3>{message}</h3>
                </div>
        </div>
    )
}


function Register(){
    const [formData,setFormData] = useState({
        email: "",
        name: "",
        password: "",
    });

    const [state,setState] = useState(false);
    const [message,setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e)=>{
        e.preventDefault();
        
        await axios.post('http://localhost/api/createUser',formData).then((res)=>{
            console.log(res);
            setMessage(res.data.message);
            setState(res.data.status);
            setTimeout(() => {
                setMessage('');
            }, 1500);
        }).catch((err)=>{
            console.log(err);
        })
    }
    return(
        <div className='container'>
                <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                    <input placeholder="Username" name="name" type="text" value={formData.name} onChange={handleChange}></input>
                    <input placeholder="Email" name="email" type="text" value={formData.email} onChange={handleChange}></input>
                    <input placeholder="Password" name="password" type="password" value={formData.password} onChange={handleChange}></input>
                    <div className='buttonContainer'>
                        <button className='button2' type='submit'>Sign Up</button>
                    </div>
                </form>
                <div className='message' style={{background: state ? 'green' : 'red', display: message=='' ? 'none' : 'block'}}>
                    <h3>{message}</h3>
                </div>
        </div>
    )
}

export {Register, Login};